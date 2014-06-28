'use strict';

// Get users character

exports.userCharacter = function(req, res) {
  res.json({
    data: {
      id: 1,
      playerName: 'Bard Hovde',
      name: 'Troglor',
      attributeOne: 65,
      attributeOneMax: 65,
      attributeTwo: 55,
      attributeTwoMax: 65,
      attributeThree: 3,
      avatar: 'troglor.png'
    }
  });
};