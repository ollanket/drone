import pg from 'pg'
import dbConfig from '../src/utils/dbConfig'

const client = new pg.Client({
  ...dbConfig,
  database: 'test-db'
})

const main = async () => {
  try {
    await client.connect()
    await client.query('BEGIN')
    await client.query(`TRUNCATE TABLE "user" CASCADE`)
    await client.query(`TRUNCATE TABLE organization CASCADE`)
    await client.query(`TRUNCATE TABLE photo CASCADE`)
    await client.query(`TRUNCATE TABLE drone CASCADE`)
    await client.query('COMMIT')
    await client.end()
  } catch (error) {
    console.error('Error committing transaction', error)
    await client.end()
  }
}
main()
