'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var GameSchema = new Schema({
  name: String,
  gm: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User' 
  }],
  lookingForPlayers: Number,
  characters: [{
        _userid: [{ 
          type: mongoose.Schema.Types.ObjectId, 
          ref: 'User' 
        }],
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