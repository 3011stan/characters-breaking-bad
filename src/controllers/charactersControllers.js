const rescue = require('express-rescue');

const { STATUS_CREATE, STATUS_BAD_REQUEST, STATUS_OK, STATUS_NO_CONTENT, STATUS_UNAUTHORIZED, STATUS_UNPROCESSABLE } = require('../utils/httpStatus');

const { 
  serviceCreateCharacter,
  serviceGetAllChars,
  serviceDeleteCharacter, 
  serviceEditCharacter,
  serviceGetCharById} = require('../services/charactersServices');

const createCharacter = rescue(async (req, res) => {
  const { character } = req.body;
  const newCharacterId = await serviceCreateCharacter({ character });

  if (newCharacterId) {
    return res.status(STATUS_CREATE).json({ success: true, personagem: character });
  }

  return res.status(STATUS_BAD_REQUEST).json({ success: false, message: 'Erro desconhecido.' });
});

const getAllChars = rescue(async (_req, res) => {
  const allChars = await serviceGetAllChars();
  if(allChars) {
    return res.status(STATUS_OK).json({ success: true, characters: allChars });
  }

  return res.status(STATUS_BAD_REQUEST).json({ success: false, message: 'Erro ao buscar personagens.' });
});

const deleteCharacter = async (req, res) => {
  const { id } = req.params;
  const success = await serviceDeleteCharacter(parseInt(id));
  if(success) {
    return res.status(STATUS_NO_CONTENT).send();
  }

  return res.status(STATUS_BAD_REQUEST).json({ success: false, message: 'Erro desconhecido.' });
}

const editCharacter = async (req, res) => {
  const { name, nickname, img } = req.body;
  const { id } = req.params;
  const updatedCharacter = await serviceEditCharacter(parseInt(id), name, nickname, img);
  if(updatedCharacter) {
    return res.status(STATUS_OK).json({ success: true, updatedCharacter: updatedCharacter});
  }
  return res.status(STATUS_UNPROCESSABLE).json({ success: false });
}

const getCharById = async (req, res) => {
  const { id } = req.params;
  const charFound = await serviceGetCharById(parseInt(id));
  if(charFound) {
    return res.status(STATUS_OK).json({ succes: true, charFound: charFound });
  }
  return res.status(STATUS_BAD_REQUEST).json({ success: false });
}

module.exports = {
  createCharacter,
  getAllChars,
  deleteCharacter,
  editCharacter,
  getCharById,
};