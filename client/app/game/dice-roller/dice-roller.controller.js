'use strict';

angular.module('stormcrowApp')
    .controller('DiceRollerCtrl', function($rootScope, $scope, $http, $q, DiceRoller, NotificationsManager ){

        // Defaults for dice dropdowns
        $scope.diceOption = [20];
        $scope.modifierOption = [0];
        $scope.numberOfTypeOfDiceOption = [1];

        $scope.sendMessageAs = ['character'];

        // sets checkbox to false
        $scope.hiddenroll = false;

        // so that first dice row appears
        $scope.numberOfDiceCombos = 1;


        /**
         * Get Dice Dropdown function
         * @No parameters
         */

        $scope.getDiceDropDowns = function() {

            var getSidesPromise = DiceRoller.getDiceSides(),
                getModifiersPromise = DiceRoller.getDiceModifiers(),
                getNumberOfDiceTypePromise = DiceRoller.getNoOfDice();

            $q.all([
                getSidesPromise.$promise,
                getModifiersPromise.$promise,
                getNumberOfDiceTypePromise.$promise
            ]).then(function() {
                    // on success
                    $scope.diceOptions = getSidesPromise.data; // sets dice sides
                    $scope.modifierOptions = getModifiersPromise.data;
                    $scope.numberOfTypeOfDiceOptions = getNumberOfDiceTypePromise.data;
                },
                // on error
                function(error) {
                    NotificationsManager.addMessage('error', 'There was a problem loading in the dice drop downs.');
                }
            );
        };


        $scope.rollTheDice = function() {

            NotificationsManager.addMessage('notification', 'Dice rolled - pop pop!');
            $rootScope.showLoading('roll-breakdown');
            // resets grandtotal to 0
            var grandtotal = 0;


            var rolledby = $scope.activeGameCharacter.characterName;


            // resets current roll
            $scope.currentRollBreakdown = {
                character: rolledby,
                text: 'makes a roll',
                type: 'diceroll',
                time: new Date(),
                grandtotal: grandtotal,
                hidden: $scope.hiddenroll,
                combo: []
            };

            // loops round as many times as number of dice rows
            for (var c = 0; c <= $scope.numberOfDiceCombos - 1; c++) {

                // resets total of dice to zero
                var total = 0;

                // Gets number of dice for row
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

                    // sets current Roll to empty object
                    var currentRoll = {};

                    // writes out this dice roll result if not a d100
                    if (dX !== 100) {

                        currentRoll = {
                            score: roll
                        };
                        // add roll to currentRoll object
                        $scope.currentRollBreakdown.combo[c].rolls.push(currentRoll);

                    } else if (roll !== 100) {

                        // we need to split into two d10 dice here so adds a zero if result less than 10
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
                        // if the roll result is a natural 100 break out into 2 dice with 10 and 0 value dice (overriding default split into 3)
                        // add the 10 dice
                        currentRoll = {
                            score: 10
                        };
                        // add roll to object
                        $scope.currentRollBreakdown.combo[c].rolls.push(currentRoll);

                        // add the zero dice
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

            //  $rootScope.eventFeed.push();

            $rootScope.showDiceRoll($scope.currentRollBreakdown);
            $rootScope.addToEventFeed($scope.currentRollBreakdown);

            $rootScope.hideLoading('roll-breakdown');
        };


        /**
         * Get Number function
         * @No parameters
         */

        // creates an array from any number entered into it (used for calculating number of dice rows)
        $scope.getNumber = function(num) {
            return new Array(num);
        };


        /**
         * Add more dice function
         * @No parameters
         */

        $scope.addMoreDice = function() {
            // increases dice combos by 1
            $scope.numberOfDiceCombos = $scope.numberOfDiceCombos + 1;

            // reset select dropdowns
            $scope.diceOption[$scope.numberOfDiceCombos - 1] = 20;
            $scope.modifierOption[$scope.numberOfDiceCombos - 1] = 0;
            $scope.numberOfTypeOfDiceOption[$scope.numberOfDiceCombos - 1] = 1;

        };


        // /**
        //  * Remove Dice function
        //  * @No parameters
        //  */

        $scope.removeDice = function() {
            $scope.numberOfDiceCombos--;
        };

        // Launch page
        $scope.getDiceDropDowns();

    });