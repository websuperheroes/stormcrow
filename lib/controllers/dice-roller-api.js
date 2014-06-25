'use strict';

// Get number of dice sides

exports.diceSides = function(req, res) {
  res.json({
    data: [{
      value: 4,
      sides: 'd4'
    }, {
      value: 6,
      sides: 'd6'
    }, {
      value: 8,
      sides: 'd8'
    }, {
      value: 10,
      sides: 'd10'
    }, {
      value: 12,
      sides: 'd12'
    }, {
      value: 20,
      sides: 'd20'
    }, {
      value: 100,
      sides: 'd100'
    }]
  });
};

exports.diceModifiers = function(req, res) {
  res.json({
    data: [{
      value: 10
    }, {
      value: 9
    }, {
      value: 8
    }, {
      value: 7
    }, {
      value: 6
    }, {
      value: 5
    }, {
      value: 4
    }, {
      value: 3
    }, {
      value: 2
    }, {
      value: 1
    }, {
      value: 0
    }, {
      value: -1
    }, {
      value: -2
    }, {
      value: -3
    }, {
      value: -4
    }, {
      value: -5
    }, {
      value: -6
    }, {
      value: -7
    }, {
      value: -8
    }, {
      value: -9
    }, {
      value: -10
    }]
  });
};

exports.noOfDice = function(req, res) {
  res.json({
    data: [{
      value: 1
    }, {
      value: 2
    }, {
      value: 3
    }, {
      value: 4
    }, {
      value: 5
    }, {
      value: 6
    }, {
      value: 7
    }, {
      value: 8
    }, {
      value: 9
    }, {
      value: 10
    }]
  });
};