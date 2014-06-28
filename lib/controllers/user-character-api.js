'use strict';

// Get users character

exports.userCharacter = function(req, res) {
  res.json({
    data: {
      id: 1,
      playerName: 'Bard Hovde',
      characterName: 'Troglor',
      attributeOne: 65,
      attributeOneMax: 65,
      attributeTwo: 55,
      attributeTwoMax: 65,
      attributeThree: 3,
      avatar: 'troglor.png'
    }
  });
};

exports.allCharacters = function(req, res) {
  res.json({
    data: [{
      id: 1,
      characterName: 'Troglor',
      avatarSmall: 'troglor.png'
    },{
      id: 2,
      characterName: 'Whitethorn',
      avatarSmall: 'whitethorn.png'
    },{
      id: 3,
      characterName: 'Grishnak',
      avatarSmall: 'grishnak.png'
    },{
      id: 4,
      characterName: 'Norbert',
      avatarSmall: 'norbert.png'
    },{
      id: 5,
      characterName: 'Japs Eye',
      avatarSmall: 'japs.png'
    }]
  });
};