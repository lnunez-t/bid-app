//Create a Map to store bids: itemID -> (userId -> bidValue)
const bids = new Map<number, Map<number, number>>();

//Submit a new bid for a specific item by a specific user.
//If the user has already placed a bid, only update it if the new bid is higher.
export const submitBid = (itemId: number, userId: number, bid: number) => {
  if (!bids.has(itemId)) {
    //Initialize a new Map for this item if it doesn't exist
    bids.set(itemId, new Map());
  }
  const userBids = bids.get(itemId)!;
  const current = userBids.get(userId) || 0;

  //Only update the bid if it is higher than the current bid
  if (bid > current) {
    userBids.set(userId, bid);
  }
};

//Get the top bids for a specific item.
//Return a list of up to 15 bids sorted from highest to lowest.
//Each bid is represented as an object with userId as key and bid as value, both as strings.
export const getTopBidsForItem = (item: number): Record<string, string>[] => {
    const itemBids = bids.get(item);
    if (!itemBids) return [];

    return Array.from(itemBids.entries())
        .sort((a, b) => b[1] - a[1]) //Sort by bid amount in descending order 
        .map(([userId, bid]) => ({ [userId.toString()]: bid.toString() })) //Convert to string format
        .slice(0, 15); //Return only the top 15 bids
};
