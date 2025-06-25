import { Request, Response } from "express";

//Import the session creation function
import {createSession} from "../services/sessionService";

//Handle GET /login/:userID requests
export const login = (req: Request, res: Response): Response => {
  //Convert userId from URL parameter to integer
  const userId = parseInt(req.params.userID);

  //If userId is not a valid number, return 400 Bad request
  if (!Number.isInteger(userId) || userId < 0 || userId >= 2**31) return res.status(400).send("Invalid user ID");

  //Create a new session for the given userId
  const sessionKey = createSession(userId);

  //Return the generated session key
  return res.status(200).send(sessionKey);
};
