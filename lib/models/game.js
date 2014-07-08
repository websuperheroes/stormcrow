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

/**
 * Validations
 */
// GameSchema.path('awesomeness').validate(function (num) {
//   return num >= 1 && num <= 10;
// }, 'Awesomeness must be between 1 and 10');

mongoose.model('Game', GameSchema);
