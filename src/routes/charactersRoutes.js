const express = require('express');

const router = express.Router();

const { createCharacter } = require('../controllers/charactersControllers');

const { 
  checksAlreadyExists,
  checksNameAuthenticity,
  addEpsToReq,
} = require('../middlewares/charactersMiddlewares');

router.post('/', checksNameAuthenticity, checksAlreadyExists, addEpsToReq, createCharacter);

module.exports = router;
