const connection = require('./connection');

const createCharacterModel = async (character) => {
  const createdCharacter = await connection().then((db) => db
    .collection('characters').insertOne(character))
    .then(({ insertedId }) => insertedId).catch((error) => console.log('--EROOU--' + error));

  return createdCharacter;
};

const findByIdModel = async (id) => {
  const query = { char_id: id };
  const charFound = await connection().then((db) => db
    .collection('characters').findOne(query))
    .then((res) => res).catch((error) => console.log(error));

  return charFound;
}

const getAllModel = async () => {
  const allChars = await connection().then((db) => db
    .collection('characters').find({}).sort( { name: 1 }).toArray())
    .then((res) => res).catch((error) => console.log(error));
  
  return allChars;
}

module.exports = {
  createCharacterModel,
  findByIdModel,
  getAllModel,
};