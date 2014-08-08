'use strict';

var mongoose = require('mongoose'),
  Game = mongoose.model('Game');

/**
 * Get list of games for user where they have a character or are GM
 */
exports.userGames = function(req, res) {

// stores user id
  var userId = req.query.uid;


  // looks for games where user id matches a char or gm
  return Game.find({
    $or: [{
      'characters._userid': userId
    }, {
      'gm': userId
    }]
  }, function(err, games) {

    // returns games
    if (!err) {
      return res.json({
        data: games
      });
    } else {
      return res.send(err);
    }
  });
};


/**
 * Get list of games accepting players
 */
exports.openGames = function(req, res) {

  // stores user id
  var userId = req.query.uid;

// looks for games that are looking for players where the user is not already a character or GM
  return Game.find({
    $and: [{
      'lookingForPlayers': {
        '$ne': null
      }
    }, {
      'characters._userid': {
        '$ne': userId
      }
    }, {
      'gm': {
        '$ne': userId
      }
    }]
  }, function(err, games) {

// returns games that match
    if (!err) {
      return res.json({
        data: games
      });
    } else {
      return res.send(err);
    }
  });
};


/**
 * Creates Game
 */
exports.createGame = function(req, res) {

  // stores data from create form
  var newGame = new Game(req.body);

  // saves to DB
  newGame.save(function(err) {

    if (!err) {
      return res.send(200);
    } else {
      console.log(err);
      return res.send(500, err);
    }

  });
};


/**
 * Creates Character
 */
exports.createCharacter = function(req, res) {

// gets id of current game
  var currentGame = req.body[0].gameID;

  // gets info about char
  var newChar = req.body[1];

  // finds current game and pushes new char into characters array
  Game.findOne({
    '_id': currentGame
  }, function(err, game) {
    if (game) {
      game.characters.push(newChar);
      game.save(function(err) {

        if (!err) {
          return res.json({
            data: newChar
          });
        } else {
          console.log(err);
          return res.send(500, err);
        }
      });
    }
  });
};