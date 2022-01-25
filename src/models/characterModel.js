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

const deleteCharModel = async (id) => {
  const result = await connection().then((db) => db
    .collection('characters').deleteOne({ 'char_id': id }))
    .then((res) => res).catch((error) => console.log(error));
  return result.deletedCount > 0;
}

const editCharModel = async (id, name, nickname, img) => {
  const filter = { 'char_id': id };
  const oldChar = await findByIdModel(id);
  const newCharacter = {
    char_id: id,
    name: name || oldChar.name,
    nickname: nickname || oldChar.nickname,
    img: img || oldChar.img,
  };

  const updateCharacter = {
    $set: newCharacter,
  };

  const result = await connection().then((db) => db
    .collection('characters').updateOne(filter, updateCharacter))
    .then((res) => res).catch((error) => console.log(error));
  console.log(result.modifiedCount);
  if (result.modifiedCount > 0) {
    return {
      success: true,
      updateCharacter: newCharacter
    };
  }
  return false;
}

module.exports = {
  createCharacterModel,
  findByIdModel,
  getAllModel,
  deleteCharModel,
  editCharModel,
};