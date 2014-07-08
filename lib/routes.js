'use strict';

var index = require('./controllers'),
      users = require('./controllers/users'),
      games = require('./controllers/games-api'),
      session = require('./controllers/session'),
      middleware = require('./middleware');

var dicerollerapi = require('./controllers/dice-roller-api');



/**
 * Application routes
 */
module.exports = function(app) {

  // Server API Routes


  /* Users
  ================================================*/
  app.route('/api/users')
    .post(users.create)
    .put(users.changePassword);
  app.route('/api/users/me')
    .get(users.me);
  app.route('/api/users/:id')
    .get(users.show);

  app.route('/api/session')
    .post(session.login)
    .delete(session.logout);



    /* Games and Characters
    ================================================*/

    app.route('/api/games-api/userGames')
    .get(games.userGames);

    // app.get('/api/user-character-api/allCharacters', usercharacterrapi.allCharacters);

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
    .get( middleware.setUserCookie, index.index);
};