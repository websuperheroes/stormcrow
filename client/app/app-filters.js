'use strict';

angular.module('stormcrowApp')
   .filter('reverse', function() {
      return function(items) {
         return items.slice().reverse(); // Create a copy of the array and reverse the order of the items
      };
   })
   .filter('orderObjectBy', function() {
      return function(input, attribute) {
         if (!angular.isObject(input)) return input;

         var array = [];
         for (var objectKey in input) {
            array.push(input[objectKey]);
         }

         array.sort(function(a, b) {
            a = parseInt(a[attribute]);
            b = parseInt(b[attribute]);
            return a - b;
         });
         return array;
      };
   });