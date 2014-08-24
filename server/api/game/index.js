'use strict';

var express = require('express');
var controller = require('./game.controller');

var router = express.Router();

router.get('/', controller.allGames);
router.get('/user', controller.userGames);
router.post('/create', controller.createGame);
router.put('/open', controller.openGames);
router.patch('/character', controller.createCharacter);

module.exports = router;