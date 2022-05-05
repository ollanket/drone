import supertest from 'supertest'
import { app } from '../../src/app'

const request = supertest(app)

describe('Organization route', () => {
  test('GET /organization', async () => {
    const response = await request.get('/organization')
    expect(response.status).toBe(200)
    expect(response.body[0].id).toBe(1000)
    expect(response.body[0].name).toEqual('no organization')
    expect(response.body[0].address).toEqual('no address')
  })
})
