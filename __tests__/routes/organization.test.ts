import supertest from 'supertest'
import { app } from '../../src/app'
import client from '../../src/client'

// !! TEST DB SETUP IS DONE IN THE SEED-TEST SCRIPT !!

const request = supertest(app)

const url = '/organization'

afterAll(() => client.end())

describe('Organization route', () => {
  test('GET /organization', async () => {
    const { status, body } = await request.get(url)
    expect(status).toBe(200)
    expect(body[0].id).toBe(1000)
    expect(body[0].name).toEqual('no organization')
    expect(body[0].address).toEqual('no address')
  })

  test('GET /organization/:organizationId', async () => {
    const { status, body } = await request.get(`${url}/1001`)
    expect(status).toBe(200)
    expect(body.id).toBe(1001)
    expect(body.name).toEqual('orgTest')
    expect(body.address).toEqual('testAddress')
  })

  test('GET /organization/:organizationId when organization does not exist', async () => {
    const { status } = await request.get(`${url}/9001`)
    expect(status).toBe(404)
  })

  test('POST /organization', async () => {
    const data = {
      name: 'new organization',
      address: 'pstreet 205'
    }
    const { status, body } = await request
      .post(url)
      .set('Accept', 'application/json')
      .send(data)
    expect(status).toBe(201)
    expect(body.id).not.toBeUndefined()
    expect(body.name).toEqual(data.name)
    expect(body.address).toEqual(data.address)
  })
})
