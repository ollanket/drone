import pg from 'pg'
import dbConfig from './utils/dbConfig'

export default new pg.Pool({
  ...dbConfig,
  database: 'test-db'
})
