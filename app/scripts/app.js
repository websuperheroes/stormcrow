'use strict';

angular.module('stormCrowApp', [
  'ngResource',
  'ngRoute',
  'angularMoment'
])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'pages/login'
      })
      .when('/home', {
        templateUrl: 'pages/home'
      })
      .when('/game', {
        templateUrl: 'pages/game'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  });