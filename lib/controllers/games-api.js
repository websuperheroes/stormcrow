'use strict';

var mongoose = require('mongoose'),
    Game = mongoose.model('Game');

/**
 * Get list of games for user where they have a character or are GM
 */
exports.userGames = function(req, res) {

  var userId = req.query.uid;

  return Game.find({ $or:[ { 'characters._userid': userId}, { 'gm': userId} ]}, function (err, games) {

    if (!err) {
      return res.json({ data: games });
    } else {
      return res.send(err);
    }
  });
};


/**
 * Get list of games accepting players
 */
exports.openGames = function(req, res) {

  var userId = req.query.uid;

  return Game.find({ $and: [{'lookingForPlayers': {'$ne': null }}, {'characters._userid': {'$ne': userId}}, { 'gm': {'$ne': userId}} ]}, function (err, games) {

    if (!err) {
      return res.json({ data: games });
    } else {
      return res.send(err);
    }
  });
};


/**
 * Creates Game
 */
exports.createGame = function(req, res) {

 var newGame = new Game(req.body);

 console.log(newGame);

   newGame.save(function(err) {

    if (!err) {
      return res.send(200);
    } else {
       console.log(err);
      return res.send(500, err);
    }

  });
};