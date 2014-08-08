'use strict';

angular.module('stormCrowApp')
   .directive('diceroller', function() {
      return {
         restrict: 'E',
         templateUrl: '/views/modules/dice-roller/dice-roller.html'
      };
   })
    .directive('toolbar', function() {
      return {
         restrict: 'E',
         templateUrl: '/views/modules/tool-bar/tool-bar.html'
      };
   })
    .directive('createcharacter', function() {
      return {
         restrict: 'E',
         templateUrl: '/views/modules/characters/create-character.html'
      };
   })
     .directive('nocharacter', function() {
      return {
         restrict: 'E',
         templateUrl: '/views/modules/characters/no-character.html'
      };
   })
       .directive('characterprofile', function() {
        return {
           restrict: 'E',
           templateUrl: '/views/modules/characters/character-profile.html'
        };
     })
     .directive('characterlist', function() {
        return {
           restrict: 'E',
           templateUrl: '/views/modules/characters/character-list.html'
        };
     })
    .directive('turnorder', function() {
      return {
         restrict: 'E',
         templateUrl: '/views/modules/turn-order/turn-order.html'
      };
   })
   .directive('eventlog', function() {
      return {
         restrict: 'E',
         templateUrl: '/views/modules/event-log/event-log.html'
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