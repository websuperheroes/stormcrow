'use strict';

var express = require('express');
var controller = require('./dice-roll.controller');

var router = express.Router();

router.get('/sides', controller.diceSides);
router.get('/modifiers', controller.diceModifiers);
router.post('/amount', controller.noOfDice);

module.exports = router;