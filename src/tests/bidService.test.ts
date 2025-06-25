import { submitBid, getTopBidsForItem } from '../services/bidService';

describe('Bid Service', () => {
  beforeEach(() => {
    // reset state manually if needed
  });

  it('should add a bid for a new item', () => {
    submitBid(1, 1, 10);
    const bids = getTopBidsForItem(1);
    expect(bids.length).toBe(1);
  });

  it('should not replace a lower bid', () => {
    submitBid(1, 2, 20);
    submitBid(1, 2, 10);
    const bids = getTopBidsForItem(1);
    expect(bids[0]['2']).toBe('20');
  });

  it('should replace a bid if higher', () => {
    submitBid(1, 3, 15);
    submitBid(1, 3, 30);
    const bids = getTopBidsForItem(1);
    expect(bids[0]['3']).toBe('30');
  });

  it('should return top 15 bids only', () => {
    for (let i = 0; i < 20; i++) {
      submitBid(2, i, i);
    }
    const topBids = getTopBidsForItem(2);
    expect(topBids.length).toBe(15);
  });

  it('should return empty array for unknown item', () => {
    expect(getTopBidsForItem(999)).toEqual([]);
  });
});
