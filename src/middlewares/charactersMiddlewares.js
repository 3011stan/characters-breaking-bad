const { serviceCheckCharExists } = require("../services/charactersServices");
const { filterEpisodesByCharacters } = require("../utils/filters");
const { STATUS_CONFLICT, STATUS_NOT_FOUND } = require("../utils/httpStatus");
const { getCharacterByName } = require("../utils/useBreakingBadApi");


const checksNameAuthenticity = async (req, res, next) => {
  const { nome } = req.body;
  const { char_id, name, img, nickname } = await getCharacterByName(nome);
  if (char_id) {
    req.body = {
      character: {
        char_id, name, img, nickname,
      }
    };
    return next();
  }
  
  return res.status(STATUS_NOT_FOUND).json({ success: false });
}

const checksAlreadyExists = async (req, res, next) => {
  const { character } = req.body;
  const exists = await serviceCheckCharExists(character['char_id']);
  if (!exists) {
    return next();
  }

  return res.status(STATUS_CONFLICT).json({ maessage: 'Personagem já cadastrado.' });
}

const addEpsToReq = async (req, res, next) => {
  const { character } = req.body;
  const epsOfThatCharacter = await filterEpisodesByCharacters(character.name, character.nickname);
  req.body.character.episodeParticipation = epsOfThatCharacter;
  if (epsOfThatCharacter) {
    return next();
  }
  return res.status(STATUS_NOT_FOUND).json({ success: false });
}

const verifyExists = async (req, res, next) => {
  const { id } = req.params;
  const exists = await serviceCheckCharExists(parseInt(id));
  if (exists) {
    return next();
  }
  return res.status(STATUS_NOT_FOUND).json({ success: false });
}

module.exports = {
  checksNameAuthenticity,
  checksAlreadyExists,
  addEpsToReq,
  verifyExists,
};