const { MongoClient } = require('mongodb');
require('dotenv').config();

const MONGO_DB_URL = process.env.MONGO_DB_URL || 'mongodb://localhost:27017/BreakingBad';
const DB_NAME = 'BreakingBadCharacters';

const SETTINGS = { useNewUrlParser: true, useUnifiedTopology: true };

const connection = async () => {
  let db = null;
  if(MONGO_DB_URL) {
    db = await MongoClient.connect(MONGO_DB_URL, SETTINGS)
        .then((conexs) => conexs.db(DB_NAME));
  }

  if(db) {
    return Promise.resolve(db);
  }

  return Promise.reject(new Error('Há algo de errado na conexão com o MondoDB.'));
};

module.exports = connection;