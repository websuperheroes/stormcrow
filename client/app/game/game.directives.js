'use strict';

angular.module('stormcrowApp')
   .directive('diceroller', function() {
      return {
         restrict: 'E',
         templateUrl: '/app/game/dice-roller/dice-roller.html'
      };
   })
    .directive('toolbar', function() {
      return {
         restrict: 'E',
         templateUrl: '/app/game/tool-bar/tool-bar.html'
      };
   })
    .directive('createcharacter', function() {
      return {
         restrict: 'E',
         templateUrl: '/app/game/characters/create-character.html'
      };
   })
     .directive('nocharacter', function() {
      return {
         restrict: 'E',
         templateUrl: '/app/game/characters/no-character.html'
      };
   })
       .directive('characterprofile', function() {
        return {
           restrict: 'E',
           templateUrl: '/app/game/characters/character-profile.html'
        };
     })
     .directive('characterlist', function() {
        return {
           restrict: 'E',
           templateUrl: '/app/game/characters/character-list.html'
        };
     })
    .directive('turnorder', function() {
      return {
         restrict: 'E',
         templateUrl: '/app/game/turn-order/turn-order.html'
      };
   })
   .directive('eventlog', function() {
      return {
         restrict: 'E',
         templateUrl: '/app/game/event-log/event-log.html'
      };
   })
   .directive('stopEvent', function() {
      return {
         restrict: 'A',
         link: function(scope, element, attr) {
            element.bind(attr.stopEvent, function(e) {
               e.stopPropagation();
            });
         }
      };
   });