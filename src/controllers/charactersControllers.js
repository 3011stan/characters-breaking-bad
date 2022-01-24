const rescue = require('express-rescue');

const { STATUS_CREATE, STATUS_BAD_REQUEST, STATUS_OK } = require('../utils/httpStatus');

const { serviceCreateCharacter } = require('../services/charactersServices');
const { MSG_SUCCESSFULLY_CREATED } = require('../utils/messagesPortuguese');
const { serviceGetAllChars } = require('../services/charactersServices');

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
})

module.exports = {
  createCharacter,
  getAllChars,
};