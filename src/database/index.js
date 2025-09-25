import knex from 'knex'
import knexConfig from '../../knexfile.js'
import 'dotenv/config'

const enviroment = process.env.NODE_ENV || 'development'

const database = knex(knexConfig[enviroment])

export { database }