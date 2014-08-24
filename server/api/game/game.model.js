'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var GameSchema = new Schema({
  name: String,
  gm: Number,
  lookingForPlayers: Number,
  characters: [{
        _userid: Number,
        characterName: String,
        avatar: String,
        attributeOne: Number,
        attributeOneMax: Number,
        attributeTwo: Number,
        attributeTwoMax: Number,
        attributeThree: Number
      }]
});

module.exports = mongoose.model('Game', GameSchema);