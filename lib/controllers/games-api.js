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
