const { createCharacterModel, findByIdModel, getAllModel } = require("../models/characterModel");

const serviceCreateCharacter = async ({ character }) => {
  const insertedId = await createCharacterModel(character);
  return insertedId;
};

const serviceCheckCharExists = async (id) => {
  const charFound = await findByIdModel(id);
  if (charFound) {
    return true;
  }
  return false;
}

const serviceGetAllChars = async () => {
  const allChars = await getAllModel();
  return allChars;
}

module.exports = {
  serviceCreateCharacter,
  serviceCheckCharExists,
  serviceGetAllChars,
};