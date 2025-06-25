//Import necessary types from Express
import { Request, Response } from "express";

//Import the functions for bids and sessions
import { submitBid, getTopBidsForItem } from "../services/bidService";
import { isValidSession } from "../services/sessionService";

//Handle POST /:itemID/bid requests
export const postBid = (req: Request, res: Response) => {
  const itemId = Number(req.params.itemID);

  // Check if itemId is a 31-bit unsigned integer
  if (!Number.isInteger(itemId) || itemId < 0 || itemId >= 2**31) {
    return res.status(400).send("Invalid item ID");
  }

  const sessionKey = req.query.sessionKey;

  //Check if sessionKey exists and is a string
  if (!sessionKey || typeof sessionKey !== 'string') {
    return res.status(403).send("Session key is required");
  }

  //Validate the session and get the associated userId
  const userId = isValidSession(sessionKey);
  if (userId === null) {
    return res.status(403).send("Invalid or expired session");
  }

  //Parse the bid value from the request body and check if it is valid
  const bidValue = parseFloat(req.body);
  if (isNaN(bidValue) || bidValue <= 0) {
    return res.status(400).send("Invalid bid value");
  }

  //Submit the bid
  submitBid(itemId, userId, bidValue);

  //Return a 200 status response with no content
  return res.status(200).send();
};


//Handle GET /:itemID/top requests to retrieve top bids
export const getTopBids = (req: Request, res: Response): Response => {
  const itemId = parseInt(req.params.itemID);

  //Validate the itemID
  if (!Number.isInteger(itemId) || itemId < 0 || itemId >= 2**31) {
    return res.status(400).send("Invalid item ID");
  }

  //Get the top bids for the item
  const bids = getTopBidsForItem(itemId);

  //Return the bids as a JSON response
  return res.status(200).json(bids);
};