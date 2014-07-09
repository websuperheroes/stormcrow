'use strict';

var index = require('./controllers'),
      users = require('./controllers/users-api'),
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
  app.route('/api/users-api')
    .post(users.create)
    .put(users.changePassword);
  app.route('/api/users-api/me')
    .get(users.me);
  app.route('/api/users-api/:id')
    .get(users.show);

  app.route('/api/session')
    .post(session.login)
    .delete(session.logout);



    /* Games and Characters
    ================================================*/

    app.route('/api/games-api/userGames')
    .get(games.userGames);

app.route('/api/games-api/createGame')
    .post(games.createGame);

    app.route('/api/games-api/openGames')
    .get(games.openGames);

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