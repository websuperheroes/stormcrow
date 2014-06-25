'use strict';

angular.module('stormCrowApp', [
  'ngResource',
  'ngRoute'
])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'pages/home'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  });