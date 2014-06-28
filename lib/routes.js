'use strict';

var index = require('./controllers');

var dicerollerapi = require('./controllers/dice-roller-api');
var usercharacterrapi = require('./controllers/user-character-api');

/**
 * Application routes
 */
module.exports = function(app) {

// Server API Routes


/* Characters
================================================*/

app.get('/api/user-character-api/userCharacter', usercharacterrapi.userCharacter);
app.get('/api/user-character-api/allCharacters', usercharacterrapi.allCharacters);

/* Dice Roller
================================================*/
app.get('/api/dice-roller-api/diceSides', dicerollerapi.diceSides);
app.get('/api/dice-roller-api/diceModifiers', dicerollerapi.diceModifiers);
app.get('/api/dice-roller-api/noOfDice', dicerollerapi.noOfDice);


  // All undefined api routes should return a 404
  app.route('/api/*')
    .get(function(req, res) {
      res.send(404);
    });

  // All other routes to use Angular routing in app/scripts/app.js
  app.route('/pages/*')
    .get(index.partials);
  app.route('/*')
    .get( index.index);
};