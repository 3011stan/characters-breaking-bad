const express = require('express');

const router = express.Router();

const { createCharacter, getAllChars, deleteCharacter, editCharacter, getCharById } = require('../controllers/charactersControllers');

const { 
  checksAlreadyExists,
  checksNameAuthenticity,
  addEpsToReq,
  verifyExists,
} = require('../middlewares/charactersMiddlewares');

router.post('/', checksNameAuthenticity, checksAlreadyExists, addEpsToReq, createCharacter);

router.get('/', getAllChars);

router.delete('/:id', deleteCharacter);

router.put('/:id', verifyExists, editCharacter);

router.get('/:id', verifyExists, getCharById);

module.exports = router;
