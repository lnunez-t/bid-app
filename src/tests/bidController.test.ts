import request from 'supertest';
import express from 'express';
import bidRoutes from '../routes/bidRoutes';
import { createSession } from '../services/sessionService';

const app = express();
app.use(express.text());
app.use('/', bidRoutes);

describe('Bid Controller', () => {
  let sessionKey: string;

  beforeEach(() => {
    sessionKey = createSession(5);
  });

  it('should return 403 without session key', async () => {
    const res = await request(app).post('/1/bid').send('100');
    expect(res.status).toBe(403);
  });

  it('should return 400 for invalid bid', async () => {
    const res = await request(app).post(`/1/bid?sessionKey=${sessionKey}`).send('abc');
    expect(res.status).toBe(400);
  });

  it('should accept valid bid', async () => {
  const res = await request(app)
    .post(`/1/bid?sessionKey=${sessionKey}`)
    .set('Content-Type', 'text/plain')
    .send('42');

  expect(res.status).toBe(200);
});


  it('should get top bids list', async () => {
    await request(app).post(`/2/bid?sessionKey=${sessionKey}`).send('15');
    const res = await request(app).get('/2/topBidList');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should return 400 for invalid itemID in GET', async () => {
    const res = await request(app).get('/invalid/topBidList');
    expect(res.status).toBe(400);
  });

  it('should return 400 for invalid item ID', async () => {
  const res = await request(app)
    .post(`/notANumber/bid?sessionKey=${sessionKey}`)
    .set('Content-Type', 'text/plain')
    .send('42');

  expect(res.status).toBe(400);
  expect(res.text).toBe('Invalid item ID');
});

it('should return 403 for invalid or expired session', async () => {
  const res = await request(app)
    .post(`/1/bid?sessionKey=invalidSessionKey`)
    .set('Content-Type', 'text/plain')
    .send('42');

  expect(res.status).toBe(403);
  expect(res.text).toBe('Invalid or expired session');
});


});