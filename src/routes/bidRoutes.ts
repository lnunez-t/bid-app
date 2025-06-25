import express from 'express';

//Import the controller functions that handle the bidding logic
import {postBid, getTopBids} from '../controllers/bidController';

//Create a new router instance
const router = express.Router();

//Route to handle submitting a bid for a given iten ID
router.post('/:itemID/bid', postBid);

//Route to get the top bids for a given item ID
router.get('/:itemID/topBidList', getTopBids);

//Export the router to be used in the main app
export default router;
