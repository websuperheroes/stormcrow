'use strict';

var mongoose = require('mongoose'),
  User = mongoose.model('User'),
  Game = mongoose.model('Game');

/**
 * Populate database with sample application data
 */

 // Clear old users, then add a default user
 User.find({}).remove(function() {
   User.create({
     provider: 'local',
     _id: 1,
     name: 'Dave',
     email: 'davidajberner@gmail.com',
     password: 'test'
   },{
     provider: 'local',
     name: 'Bard',
     _id: 2,
     email: 'bnhovde@gmail.com',
     password: 'test'
   },{
     provider: 'local',
     name: 'Frog',
     _id: 3,
     email: 'gwood_2k1@gmail.com',
     password: 'test'
   }, {
     provider: 'local',
     name: 'Jon',
     _id: 4,
     email: 'jonsdarkarts@gmail.com',
     password: 'test'
   }, function() {
       console.log('finished populating users');
     }
   );
 });

//Clear old games, then add  dummy games in
Game.find({}).remove(function() {
  Game.create({
    name: 'Troglor goes home',
    gm: 4,
    characters: [{
        _userid: 1,
        characterName: 'Grishnak',
        avatar: 'grishnak.png',
        attributeOne: 55,
        attributeOneMax: 65,
        attributeTwo: 65,
        attributeTwoMax: 65,
        attributeThree: 2
      },{
        _userid: 2,
        characterName: 'Troglor',
        avatar: 'troglor.png',
        attributeOne: 65,
        attributeOneMax: 65,
        attributeTwo: 65,
        attributeTwoMax: 65,
        attributeThree: 1
      },{
        _userid: 3,
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
      gm: 2,
      lookingForPlayers: 2,
      characters: [{
          _userid: 5,
          characterName: 'Twiglet',
          avatar: 'whitethorn.png',
          attributeOne: 65,
          attributeOneMax: 65,
          attributeTwo: 55,
          attributeTwoMax: 85,
          attributeThree: 3,
        },{
          _userid: 3,
          characterName: 'Digit',
          avatar: 'troglor.png',
          attributeOne: 5,
          attributeOneMax: 65,
          attributeTwo: 55,
          attributeTwoMax: 55,
          attributeThree: 3
        },{
          _userid: 4,
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
      gm: 1,
      characters: [{
          _userid: 2,
          characterName: 'Naysayer',
          avatar: 'troglor.png',
          attributeOne: 65,
          attributeOneMax: 65,
          attributeTwo: 55,
          attributeTwoMax: 65,
          attributeThree: 2
        },{
          _userid: 3,
          characterName: 'Ball Bawg',
          avatar: 'troglor.png',
          attributeOne: 65,
          attributeOneMax: 65,
          attributeTwo: 55,
          attributeTwoMax: 65,
          attributeThree: 1
        },{
          _userid: 4,
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
      gm: 1,
      lookingForPlayers: 1,
      characters: [{
          _userid: 2,
          characterName: 'Vivaldi',
          avatar: 'troglor.png',
          attributeOne: 65,
          attributeOneMax: 65,
          attributeTwo: 55,
          attributeTwoMax: 65,
          attributeThree: 2
        },{
          _userid: 3,
          characterName: 'Ball Bawg',
          avatar: 'troglor.png',
          attributeOne: 65,
          attributeOneMax: 65,
          attributeTwo: 55,
          attributeTwoMax: 65,
          attributeThree: 1
        },{
          _userid: 4,
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
      lookingForPlayers: 6,
      gm: 8,
      characters: []
    }, {
      name: 'Game over bro',
      lookingForPlayers: 2,
      gm: 8,
      characters: []
    },  {
      name: 'Empty Game',
      lookingForPlayers: 1,
      gm: 8,
      characters: []
    },function() {
      console.log('finished populating games');
    }
  );
});


