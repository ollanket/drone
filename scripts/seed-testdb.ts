import pg from 'pg'
import dbConfig from '../src/utils/dbConfig'

const client = new pg.Client({
  ...dbConfig,
  database: 'test-db'
})

const main = async () => {
  await client.connect()
  // Test org
  await client.query(
    `INSERT INTO organization (id, name, address) VALUES ('1000', 'no organization', 'no address')`
  )
  // Test user
  await client.query(
    `INSERT INTO "user" (id, name, password, username, organization_id)
      VALUES ('1', 'testName', 'testPassword', 'testUserName', '1000')`
  )
  // Test drone
  await client.query(`
  INSERT INTO drone (id, name, brand, model, info, user_id, maintainer_org)
  VALUES ('1', 'testDrone', 'testBrand', 'testModel', 'testInfo', '1', '1000')`)
  // Test photo
  await client.query(`
    INSERT INTO photo (id, analysis, location, drone_id, user_id)
    VALUES ('1', 'testAnalysis', '(30,30)', '1', '1')
  `)

  // For org tests
  await client.query(
    `INSERT INTO organization (id, name, address) VALUES ('1001', 'orgTest', 'testAddress')`
  )

  await client.end()
}
main()
