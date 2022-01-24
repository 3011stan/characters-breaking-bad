const rescue = require('express-rescue');

const { STATUS_CREATE, STATUS_BAD_REQUEST } = require('../utils/httpStatus');

const { serviceCreateCharacter } = require('../services/charactersServices');
const { MSG_SUCCESSFULLY_CREATED } = require('../utils/messagesPortuguese');

const createCharacter = rescue(async (req, res) => {
  const { character } = req.body;
  const newCharacterId = await serviceCreateCharacter({ character });

  if (newCharacterId) {
    return res.status(STATUS_CREATE).json({ personagem: character, message: MSG_SUCCESSFULLY_CREATED });
  }

  return res.status(STATUS_BAD_REQUEST).json({ message: 'Erro desconhecido.' });
});

module.exports = {
  createCharacter,
};