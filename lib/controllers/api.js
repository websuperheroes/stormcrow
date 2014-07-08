'use strict';

var mongoose = require('mongoose'),
    Game = mongoose.model('Game');

/**
 * Get list of games
 */
exports.games = function(req, res) {

  var userId = req.query.uid;

  return Game.find({ $or:[ { 'characters._userid': userId}, { 'gm': userId} ]}, function (err, games) {

    if (!err) {
      return res.json({ data: games });
    } else {
      return res.send(err);
    }
  });
};

exports.gmGames = function(req, res) {


  return Game.find({ 'gm': 1 }, function (err, gmGames) {

    if (!err) {
      return res.json(gmGames);
    } else {
      return res.send(err);
    }
  });
};