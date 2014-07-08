'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Game Schema
 */
var GameSchema = new Schema({
  _id: Number,
  name: String,
  gm: Number,
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


mongoose.model('Game', GameSchema);
