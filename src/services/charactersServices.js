const { 
  createCharacterModel,
  findByIdModel,
  getAllModel,
  deleteCharModel, 
  editCharModel
} = require("../models/characterModel");

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
};

const serviceGetAllChars = async () => {
  const allChars = await getAllModel();
  return allChars;
};

const serviceDeleteCharacter = async (id) => {
  const deletedChar = await deleteCharModel(id);
  if(deletedChar) {
    return true;
  }
  return false;
};

const serviceEditCharacter = async (id, name, nickname, img) => {
  const updatedCharacter = await editCharModel(id, name, nickname, img);
  if(updatedCharacter) {
    return updatedCharacter;
  }

  return false;
};

const serviceGetCharById = async (id) => {
  const foundChar = await findByIdModel(id);
  return foundChar;
};

module.exports = {
  serviceCreateCharacter,
  serviceCheckCharExists,
  serviceGetAllChars,
  serviceDeleteCharacter,
  serviceEditCharacter,
  serviceGetCharById,
};