'use strict';

angular.module('stormcrowApp')
    .controller('GameCtrl', function($rootScope, $scope, $timeout, Games, $q, Auth, State, NotificationsManager){

        $scope.isLoggedIn = Auth.isLoggedIn;
        $scope.isAdmin = Auth.isAdmin;
        $scope.currentUser = Auth.getCurrentUser();
        var activeGameId = '';

        // Try getting active game from state first, then from DB
        if (State.getActiveGame() !== '') {
            activeGameId = State.getActiveGame();
        } else {
            activeGameId = $scope.currentUser.activeGame;
        }

        /**
         * Get game from DB
         * @No parameters
         */

        $scope.getGame = function() {

            var data = ({
                gameId: activeGameId
            });

            console.log('getting game with ID ' + activeGameId);

            var activeGamePromise = Games.activeGame(data);

            $q.all([
                activeGamePromise.$promise
            ]).then(function() {

                    $scope.activeGame = activeGamePromise.data;
                    $scope.getGameDetails();

                },
                function(error) {
                    NotificationsManager.addMessage('error', 'There was a problem loading games - try refreshing the page');
                }
            );
        };

        /**
         * Get current game details
         * @No parameters
         */

        $scope.getGameDetails = function() {

            var activeGame = $scope.activeGame;
            $scope.userIsGM = false;
            $scope.activeGameCharacter = '';
            $scope.allCharacters = [];

            console.log($scope.activeGame);

            // checks if the user is set to gm
            if (activeGame.gm == $scope.currentUser._id) {
                $scope.userIsGM = true;
            }

            // adds all characters to the scope
            if ($scope.activeGame.characters.length) {

                $scope.allCharacters = activeGame.characters;


                for (var i = 0; i < activeGame.characters.length; i++) {
                    if (activeGame.characters[i]._userid == $scope.currentUser._id) {
                        // sets match to be users character
                        $scope.activeGameCharacter = activeGame.characters[i];
                    }
                }
            }

            // Broadcast to child scopes that game details has loaded
            console.log('now broadcasting gameLoaded!');
            $scope.$broadcast('gameLoaded', 'Some data');
            $scope.eventLoggerSendAs();

        };


        /**
         * Event Logger "Send As" function
         * @Parameters type and text
         */

        $scope.eventLoggerSendAs = function() {

            // if the user isn't the GM they can send as player or character
            if (!$scope.userIsGM) {

                $scope.sendAsOptions = [{
                    type: 'character',
                    name: $scope.activeGameCharacter.characterName,
                }, {
                    type: 'player',
                    name: $scope.currentUser.name,
                }];
            } // GM can send as GM or any character
            else {
                // adds GM option
                $scope.sendAsOptions = [{
                    type: 'character',
                    name: 'GM'
                }];
                // loops through characters and adds names to GM send as options
                for (var i = 0; i < $scope.allCharacters.length; i++) {

                    var character = {
                        type: 'playercharacter',
                        name: $scope.allCharacters[i].characterName
                    };
                    $scope.sendAsOptions.push(character);
                }
            }
            $scope.sendMessageAs = $scope.sendAsOptions[0];
        };


        /**
         * Toggle GM / DM function
         * @No Parameters
         */

        $scope.toggleUserIsGM = function() {

            $scope.userIsGM = $scope.userIsGM === false ? true : false;

            $Scope.eventLoggerSendAs();
        };


        /**
         * Toggle Turn Order function
         * @No Parameters
         */

        $scope.turnOrderShow = false;

        $scope.toggleTurnOrder = function() {
            $scope.turnOrderShow = $scope.turnOrderShow === false ? true : false;
        };


        /**
         * Toggle Dice Roll Widget function
         * @No Parameters
         */

        $scope.diceRollShow = false;

        $scope.toggleDiceRoller = function() {
            $scope.diceRollShow = $scope.diceRollShow === false ? true : false;
        };


        /**
         * Toggle Grid Lines function
         * @No Parameters
         */

        $scope.showGridLines = false;

        $scope.toggleGridLines = function() {
            $scope.showGridLines = $scope.showGridLines === false ? true : false;
        };


        // Empty slots for user toolbar
        $scope.toolBar = [{
            icon: '',
            name: ''
        }, {
            icon: '',
            name: ''
        }, {
            icon: '',
            name: ''
        }, {
            icon: '',
            name: ''
        }];


        /**
         * Select Character
         * @No parameters
         */

        $scope.selectCharacter = function() {

            // sets current char to newly created
            $scope.activeGameCharacter = $scope.chosenCharacter;
            NotificationsManager.addMessage('success', 'Welcome to the game, ' + $scope.activeGameCharacter.characterName);
        };


        /**
         * Loading Widgets function
         * @No parameters
         */

        $rootScope.widgetLoading = {};

        // function to show and hide widget loaders
        $rootScope.showLoading = function(elementId) {
            $rootScope.widgetLoading[elementId] = true;
        };
        $rootScope.hideLoading = function(elementId) {
            if (elementId === '' || typeof elementId === 'undefined') {
                $rootScope.widgetLoading = {};
            } else {
                delete($rootScope.widgetLoading[elementId]);
            }
        };


        /**
         * Add Event function
         * @Event parameter
         */

        // makes sure event log is clear on load
        $rootScope.eventFeed = [];
        // function to add a new alert message
        $rootScope.addToEventFeed = function(event) {
            $rootScope.eventFeed.push(event);
        };


        /**
         * Dice Roll function
         * @No parameters
         */

        // makes sure dice roll is clear on load
        $rootScope.diceRoll = [];

        // function to add a new dice roll to table top
        $rootScope.showDiceRoll = function(roll) {
            // clears last dice roll
            $rootScope.diceRoll = [];
            $rootScope.diceRoll.push(roll);
            $timeout(function() {
                $rootScope.removeDiceRoll(-1);
            }, 10000);
        };
        // function remove an exisiting dice roll when new set of dice are rolled
        $rootScope.removeDiceRoll = function(index) {
            if (index < 0 || index >= $rootScope.diceRoll.length) {
                index = 0;
            }
            $rootScope.diceRoll.splice(index, 1);
        };


        /**
         * Trigger for create char modal
         * @No parameters
         */
        $scope.createCharacter = function() {
            $scope.characterCreationActive = true;
        };


        /**
         * Save char function inside 'modal'
         * @No parameters
         */
        $scope.saveCharacter = function(form) {

            $scope.submitted = true;
            var uid = '';
            if ($scope.userIsGM) {
                console.log('user is gM');
                uid = '';
            } else {
                uid = $scope.currentUser._id;
            }

            // sets up info from form about char
            var charInfo = ([{
                gameID: $scope.activeGame._id
            }, {
                _uid: uid,
                characterName: $scope.character.characterName,
                avatar: 'troglor.png',
                attributeOne: $scope.character.attributeOne,
                attributeOneMax: $scope.character.attributeOneMax,
                attributeTwo: $scope.character.attributeTwo,
                attributeTwoMax: $scope.character.attributeTwoMax,
                attributeThree: $scope.character.attributeThree
            }]);

            // sends data to endpoint
            var createCharPromise = Games.createChar(charInfo);

            $q.all([
                createCharPromise.$promise
            ])
                .then(function(response) {
                    // when successful, launches alert box, closes modal

                    if ($scope.userIsGM) {
                        NotificationsManager.addMessage('success', 'Created character: ' + $scope.character.characterName);
                    } else {
                        // if user isn't GM, makes them the new character
                        NotificationsManager.addMessage('success', 'Welcome to the game, ' + $scope.character.characterName);
                        // sets current char to newly created
                        $scope.activeGameCharacter = charInfo[1];
                    }
                    // closes modal
                    $scope.characterCreationActive = false;

                    // Re-populates event log options
                    $scope.eventLoggerSendAs();

                    // Adds character to the character listing
                    $scope.allCharacters.push(charInfo[1]);

                })
                .catch(function(err) {
                    err = err.data;
                    $scope.errors.other = err.message;
                });
        };

        // cancels character creation
        $scope.cancelCreation = function() {
            $scope.characterCreationActive = false;
        };

        // launches get characters function
        $scope.getGame();

    });