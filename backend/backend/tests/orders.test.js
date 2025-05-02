const request = require('supertest');
const app = require('../server');

describe('GET /api/orders without token', () => {
  it('should return 401 unauthorized', async () => {
    const res = await request(app).get('/api/orders');
    expect(res.statusCode).toBe(401);
  });
});
