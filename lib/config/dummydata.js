'use strict';

var mongoose = require('mongoose'),
  User = mongoose.model('User'),
  Thing = mongoose.model('Thing');

/**
 * Populate database with sample application data
 */

//Clear old things, then add things in
Thing.find({}).remove(function() {
  Thing.create({
    name : 'HTML5 Boilerplate',
    info : 'HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites.',
    awesomeness: 10
  }, {
    name : 'AngularJS',
    info : 'AngularJS is a toolset for building the framework most suited to your application development.',
    awesomeness: 10
  }, {
    name : 'Karma',
    info : 'Spectacular Test Runner for JavaScript.',
    awesomeness: 10
  }, {
    name : 'Express',
    info : 'Flexible and minimalist web application framework for node.js.',
    awesomeness: 10
  }, {
    name : 'MongoDB + Mongoose',
    info : 'An excellent document database. Combined with Mongoose to simplify adding validation and business logic.',
    awesomeness: 10
  }, function() {
      console.log('finished populating things');
    }
  );
});

// Clear old users, then add a default user
User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Dave',
    email: 'davidajberner@gmail.com',
    password: 'test',
    games: [{
        gameName: 'Troglor goes home',
        characterName: 'Grishnak',
        gm: true,
        avatar: 'grishnak.png',
        attributeOne: 65,
      attributeOneMax: 65,
      attributeTwo: 55,
      attributeTwoMax: 65,
      attributeThree: 3,
      },{
        gameName: 'Homo Game',
        characterName: 'Vivaldi',
        gm: false,
        avatar: 'whitethorn.png',
        attributeOne: 65,
      attributeOneMax: 65,
      attributeTwo: 55,
      attributeTwoMax: 65,
      attributeThree: 3,
      },{
        gameName: 'Greek and Tapas Nights',
        characterName: 'Shuriken',
        gm: false,
        avatar: 'japs.png',
        attributeOne: 65,
      attributeOneMax: 65,
      attributeTwo: 55,
      attributeTwoMax: 65,
      attributeThree: 3,
      }]
  },{
    provider: 'local',
    name: 'Bard',
    email: 'bnhovde@gmail.com',
    password: 'test',
    games: [{
        gameName: 'Troglor goes home',
        characterName: 'Troglor',
        gm: false,
        avatar: 'troglor.png',
        attributeOne: 65,
      attributeOneMax: 65,
      attributeTwo: 55,
      attributeTwoMax: 65,
      attributeThree: 3,
      },{
        gameName: 'Ultimate Game',
        characterName: 'Allesyn',
        gm: true,
        avatar: 'allesyn.png',
        attributeOne: 65,
      attributeOneMax: 65,
      attributeTwo: 55,
      attributeTwoMax: 65,
      attributeThree: 3,
      },{
        gameName: 'Neverwinter Nights',
        characterName: 'Hawkeye',
        gm: false,
        avatar: 'grishnak.png',
        attributeOne: 65,
      attributeOneMax: 65,
      attributeTwo: 55,
      attributeTwoMax: 65,
      attributeThree: 3,
      }]
  },{
    provider: 'local',
    name: 'Frog',
    email: 'gwood_2k1@gmail.com',
    password: 'test',
    games: [{
        gameName: 'Troglor goes home',
        characterName: 'Nigel',
        gm: false,
        avatar: 'whitethorn.png',
        attributeOne: 65,
      attributeOneMax: 65,
      attributeTwo: 55,
      attributeTwoMax: 65,
      attributeThree: 3,
      },{
        gameName: 'King of Thieves',
        characterName: 'Hiro',
        gm: false,
        avatar: 'japs.png',
        attributeOne: 65,
      attributeOneMax: 65,
      attributeTwo: 55,
      attributeTwoMax: 65,
      attributeThree: 3,
      },{
        gameName: 'Ticket to Ride',
        characterName: 'Boris',
        gm: true,
        avatar: 'grishnak.png',
        attributeOne: 65,
      attributeOneMax: 65,
      attributeTwo: 55,
      attributeTwoMax: 65,
      attributeThree: 3,
      }]
  }, function() {
      console.log('finished populating users');
    }
  );
});
