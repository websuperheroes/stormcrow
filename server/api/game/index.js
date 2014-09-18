'use strict';

var express = require('express');
var controller = require('./game.controller');

var router = express.Router();

router.get('/', controller.allGames);
router.get('/user', controller.userGames);
router.post('/create', controller.createGame);
router.get('/open', controller.openGames);
router.post('/character', controller.createCharacter);
router.get('/active', controller.gameById);

module.exports = router;