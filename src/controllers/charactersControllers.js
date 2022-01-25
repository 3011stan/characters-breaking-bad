const rescue = require('express-rescue');

const { STATUS_CREATE, STATUS_BAD_REQUEST, STATUS_OK, STATUS_NO_CONTENT, STATUS_UNAUTHORIZED } = require('../utils/httpStatus');

const { 
  serviceCreateCharacter,
  serviceGetAllChars,
  serviceDeleteCharacter } = require('../services/charactersServices');
const { MSG_SUCCESSFULLY_CREATED } = require('../utils/messagesPortuguese');

const createCharacter = rescue(async (req, res) => {
  const { character } = req.body;
  const newCharacterId = await serviceCreateCharacter({ character });

  if (newCharacterId) {
    return res.status(STATUS_CREATE).json({ personagem: character, message: MSG_SUCCESSFULLY_CREATED });
  }

  return res.status(STATUS_BAD_REQUEST).json({ message: 'Erro desconhecido.' });
});

const getAllChars = rescue(async (_req, res) => {
  const allChars = await serviceGetAllChars();
  if(allChars) {
    return res.status(STATUS_OK).json({ characters: allChars });
  }

  return res.status(STATUS_BAD_REQUEST).json({ message: 'Erro ao buscar personagens.' });
});

const deleteCharacter = async (req, res) => {
  const { id } = req.params;
  const success = await serviceDeleteCharacter(parseInt(id));
  if(success) {
    return res.status(STATUS_NO_CONTENT).send();
  }

  return res.status(STATUS_BAD_REQUEST).json({ message: 'Erro desconhecido.' });
}

module.exports = {
  createCharacter,
  getAllChars,
  deleteCharacter,
};