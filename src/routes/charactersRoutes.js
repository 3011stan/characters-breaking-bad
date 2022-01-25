const express = require('express');

const router = express.Router();

const { createCharacter, getAllChars, deleteCharacter } = require('../controllers/charactersControllers');

const { 
  checksAlreadyExists,
  checksNameAuthenticity,
  addEpsToReq,
} = require('../middlewares/charactersMiddlewares');

router.post('/', checksNameAuthenticity, checksAlreadyExists, addEpsToReq, createCharacter);

router.get('/', getAllChars);

router.delete('/:id', deleteCharacter);

module.exports = router;
