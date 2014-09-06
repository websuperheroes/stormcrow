/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Game = require('../api/game/game.model');
var User = require('../api/user/user.model');
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

User.find({}).remove(function() {
  User.create({
     provider: 'local',
     _id: '53fefc7ee4e09a00005c95a3',
     name: 'Dave',
     email: 'davidajberner@gmail.com',
     password: 'test',
     activeGame: '53fefc7ee4e09a00005caaaa'
   },{
     provider: 'local',
     name: 'Bard',
     _id: '53fefc7ee4e09a22225c95a3',
     email: 'bnhovde@gmail.com',
     password: 'test',
     activeGame: '53fefc7ee4e09a00005caaaa'
   },{
     provider: 'local',
     name: 'Frog',
     _id: '53fefc7ee4e09a33335c95a3',
     email: 'gwood_2k1@gmail.com',
     password: 'test',
     activeGame: '53fefc7ee4e09a00005caaaa'
   }, {
     provider: 'local',
     name: 'Jon',
     _id: '53fefc7ee4e09a44445c95a3',
     email: 'jonsdarkarts@gmail.com',
     password: 'test',
     activeGame: '53fefc7ee4e09a00005ceeee'
  }, {
     provider: 'local',
     name: 'Administrator',
     role: 'admin',
     _id: '53fefc7ee4e09a55555c95a3',
     email: 'admin@stormcrow.com',
     password: 'test',
     activeGame: '53fefc7ee4e09a22225c95a3'
  }, function() {
      console.log('finished populating users');
    }
  );
});


Game.find({}).remove(function() {
  Game.create({
    name: 'Troglor goes home',
    _id: '53fefc7ee4e09a00005caaaa',
    gm: '53fefc7ee4e09a44445c95a3',
    characters: [{
        _userid: '53fefc7ee4e09a00005c95a3',
        characterName: 'Grishnak',
        avatar: 'grishnak.png',
        attributeOne: 55,
        attributeOneMax: 65,
        attributeTwo: 65,
        attributeTwoMax: 65,
        attributeThree: 2
      },{
        _userid: '53fefc7ee4e09a22225c95a3',
        characterName: 'Troglor',
        avatar: 'troglor.png',
        attributeOne: 65,
        attributeOneMax: 65,
        attributeTwo: 65,
        attributeTwoMax: 65,
        attributeThree: 1
      },{
        _userid: '53fefc7ee4e09a33335c95a3',
        characterName: 'Whitethorn',
        avatar: 'whitethorn.png',
        attributeOne: 65,
        attributeOneMax: 65,
        attributeTwo: 55,
        attributeTwoMax: 65,
        attributeThree: 1
      }]
  }, {
      name: 'Eat my D',
      _id: '53fefc7ee4e09a00005cbbbb',
      gm: '53fefc7ee4e09a22225c95a3',
      lookingForPlayers: 2,
      characters: [{
          _userid: '53fefc7ee4e09a55555c95a3',
          characterName: 'Twiglet',
          avatar: 'whitethorn.png',
          attributeOne: 65,
          attributeOneMax: 65,
          attributeTwo: 55,
          attributeTwoMax: 85,
          attributeThree: 3,
        },{
          _userid: '53fefc7ee4e09a33335c95a3',
          characterName: 'Digit',
          avatar: 'troglor.png',
          attributeOne: 5,
          attributeOneMax: 65,
          attributeTwo: 55,
          attributeTwoMax: 55,
          attributeThree: 3
        },{
          _userid: '53fefc7ee4e09a44445c95a3',
          characterName: 'Child Please',
          avatar: 'whitethorn.png',
          attributeOne: 65,
          attributeOneMax: 65,
          attributeTwo: 35,
          attributeTwoMax: 65,
          attributeThree: 3,
        }]
    }, {
      name: 'Homo Game',
      _id: '53fefc7ee4e09a00005ccccc',
      gm: '53fefc7ee4e09a00005c95a3',
      characters: [{
          _userid: '53fefc7ee4e09a22225c95a3',
          characterName: 'Naysayer',
          avatar: 'troglor.png',
          attributeOne: 65,
          attributeOneMax: 65,
          attributeTwo: 55,
          attributeTwoMax: 65,
          attributeThree: 2
        },{
          _userid: '53fefc7ee4e09a33335c95a3',
          characterName: 'Ball Bawg',
          avatar: 'troglor.png',
          attributeOne: 65,
          attributeOneMax: 65,
          attributeTwo: 55,
          attributeTwoMax: 65,
          attributeThree: 1
        },{
          _userid: '53fefc7ee4e09a44445c95a3',
          characterName: 'Shin Fein',
          avatar: 'whitethorn.png',
          attributeOne: 65,
          attributeOneMax: 65,
          attributeTwo: 55,
          attributeTwoMax: 65,
          attributeThree: 2
        }]
  }, {
      name: 'The Superfly Game',
      _id: '53fefc7ee4e09a00005cdddd',
      gm: '53fefc7ee4e09a00005c95a3',
      lookingForPlayers: 1,
      characters: [{
          _userid: '53fefc7ee4e09a22225c95a3',
          characterName: 'Vivaldi',
          avatar: 'troglor.png',
          attributeOne: 65,
          attributeOneMax: 65,
          attributeTwo: 55,
          attributeTwoMax: 65,
          attributeThree: 2
        },{
          _userid: '53fefc7ee4e09a33335c95a3',
          characterName: 'Ball Bawg',
          avatar: 'troglor.png',
          attributeOne: 65,
          attributeOneMax: 65,
          attributeTwo: 55,
          attributeTwoMax: 65,
          attributeThree: 1
        },{
          _userid: '53fefc7ee4e09a44445c95a3',
          characterName: 'Shin Fein',
          avatar: 'whitethorn.png',
          attributeOne: 65,
          attributeOneMax: 65,
          attributeTwo: 55,
          attributeTwoMax: 65,
          attributeThree: 2
        }]
  },{
      name: 'No Friends Game',
      _id: '53fefc7ee4e09a00005ceeee',
      lookingForPlayers: 6,
      gm: '53fefc7ee4e09a44445c95a3',
      characters: [{
          _userid: '53fefc7ee4e09a22225c95a3',
          characterName: 'Nog',
          avatar: 'troglor.png',
          attributeOne: 65,
          attributeOneMax: 65,
          attributeTwo: 55,
          attributeTwoMax: 65,
          attributeThree: 1
        },{
          _userid: '53fefc7ee4e09a22225c95a3',
          characterName: 'Box Clever',
          avatar: 'grishnak.png',
          attributeOne: 65,
          attributeOneMax: 65,
          attributeTwo: 55,
          attributeTwoMax: 65,
          attributeThree: 2
        },{
          _userid: '53fefc7ee4e09a22225c95a3',
          characterName: 'Hadouken',
          avatar: 'whitethorn.png',
          attributeOne: 65,
          attributeOneMax: 65,
          attributeTwo: 55,
          attributeTwoMax: 65,
          attributeThree: 2
        }]
    }, {
      name: 'Game over bro',
      _id: '53fefc7ee4e09a00005cffff',
      lookingForPlayers: 2,
      gm: '53fefc7ee4e09a22225c95a3',
      characters: []
    },  {
      name: 'Empty Game',
      _id: '53fefc7ee4e09a00005c1111',
      lookingForPlayers: 1,
      gm: '53fefc7ee4e09a22225c95a3',
      characters: []
    },function() {
      console.log('finished populating games');
    }
  );
});
