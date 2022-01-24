const express = require('express');

const router = express.Router();

const { createCharacter, getAllChars } = require('../controllers/charactersControllers');

const { 
  checksAlreadyExists,
  checksNameAuthenticity,
  addEpsToReq,
} = require('../middlewares/charactersMiddlewares');

router.post('/', checksNameAuthenticity, checksAlreadyExists, addEpsToReq, createCharacter);

router.get('/', getAllChars);

module.exports = router;
