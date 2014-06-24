'use strict';

angular.module('stormCrowApp')
  .controller('MainCtrl', function($scope, $http) {


    var DiceOption = function() {
      this.value = 20;
      this.sides = 'd20';
    };

    // dropdown option defaults
    $scope.diceOption = [{

    }];

    $scope.modifierOption = {};
    $scope.numberOfTypeOfDiceOption = {};

    // sets checkbox to false
    $scope.hiddenroll = false;

    // so that first dice row appears
    $scope.numberOfDiceCombos = 1;

    // makes sure history is clear on load
    $scope.historicalRollBreakdown = [];


    // dropdown options
    $scope.diceOptions = [{
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
      sides: '100'
    }];

    $scope.modifierOptions = [{
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
    }];


    $scope.numberOfTypeOfDiceOptions = [{
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
    }];

    $scope.rollTheDice = function() {

      var hidden = $scope.hiddenroll;

      // sets grandtotal to 0
      var grandtotal = 0;

      if ($scope.currentRollBreakdown) {
        // puts current roll into history if it exists
        $scope.historicalRollBreakdown.push($scope.currentRollBreakdown);
      }

      // resets current roll
      $scope.currentRollBreakdown = {
        grandtotal: 0,
        hidden: hidden,
        combo: []
      };

      // loops round as many times as number of dice rows
      for (var c = 0; c <= $scope.numberOfDiceCombos - 1; c++) {

        // resets total of dice to zero
        var total = 0;

        // Gets number of dice
        var amountOfDice = $scope.numberOfTypeOfDiceOption[c];

        // gets dice type (d6, d8 etc hence dX)
        var dX = $scope.diceOption[c];

        // gets modifier
        var mod = $scope.modifierOption[c];

        var currentCombo = {
          dx: dX,
          amountOfDice: amountOfDice,
          mod: mod,
          rolls: []
        };
        // add roll to object
        $scope.currentRollBreakdown.combo[c] = currentCombo;


        // loops round as many times as number of dice
        for (var i = 1; i <= amountOfDice; i++) {

          // creates a random roll each time
          var roll = Math.floor(Math.random() * dX + 1);

          // adds current roll to the total
          total += roll;

          var currentRoll = {};
          //d100 require 2 dice in the breakdown
          if (dX !== 100) {
            // writes out this dice roll result if not a d100

            currentRoll = {
              score: roll
            };
            // add roll to object
            $scope.currentRollBreakdown.combo[c].rolls.push(currentRoll);

          } else if (roll !== 100) {

            // we need to split into 2 dice here so adds a zero if result less than 10
            if (roll < 10) {
              roll = '0' + roll;
            }

            // splits roll into its tens and units
            var tensAndUnits = roll.toString().split('');

            // loops through tens and units and draws relevant 10 sided dice
            for (var d = 0; d < tensAndUnits.length; d++) {

              currentRoll = {
                score: tensAndUnits[d]
              };
              // add roll to object
              $scope.currentRollBreakdown.combo[c].rolls.push(currentRoll);
            }
            // end of loop for d100

          } else {
            // if the roll is 100 break out into 2 dice with 10 and 0 value dice (overriding split)

            currentRoll = {
              score: 10
            };
            // add roll to object
            $scope.currentRollBreakdown.combo[c].rolls.push(currentRoll);

            currentRoll = {
              score: 0
            };
            // add roll to object
            $scope.currentRollBreakdown.combo[c].rolls.push(currentRoll);
          }
          // end of if / else for writing out breakdown dice

        }
        // end of for loop 'amount of dice'

        // sums the roll and modifier
        total += mod;

        //  for multiple dice: adds all rolls and modifiers
        grandtotal += total;

      }
      // end of 'for loop' (numberOfDiceCombos)

      // appends grandtotal to current roll item
      $scope.currentRollBreakdown.grandtotal = grandtotal;

    };

    /**
     * Clear roll history function
     * @No parameters
     */

    $scope.clearRollHistory = function() {
      $scope.historicalRollBreakdown = [];
    };


    /**
     * Add more dice function
     * @No parameters
     */

    // creates an array from any number entered into it
    $scope.getNumber = function(num) {
      return new Array(num);
    };

    $scope.addMoreDice = function() {
      // increases dice combos by 1
      $scope.numberOfDiceCombos = $scope.numberOfDiceCombos + 1;
      $scope.diceOption.push(new DiceOption());
    };


    // /**
    //  * Remove Dice function
    //  * @No parameters
    //  */

    $scope.removeDice = function() {
      $scope.numberOfDiceCombos--;
    };

  });