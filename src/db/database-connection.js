require('dotenv').config();
const { MongoClient } = require('mongodb');

const admSecret = process.env.SECRET_ADM
const keySecret = process.env.SECRET_KEY

const dbUrl = `mongodb+srv://${admSecret}:${keySecret}@cluster0.3rntpik.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
const dbName = 'mongodb-arquitetura-mvc'
const client = new MongoClient(dbUrl)

async function connectToDatabase() {
  console.log('Conectando ao banco de dados...')
  await client.connect()
  console.log('Banco de dados conectado com sucesso!')
}

function getDatabase() {
  return client.db(dbName)
}

module.exports = {
  connectToDatabase,
  getDatabase
}