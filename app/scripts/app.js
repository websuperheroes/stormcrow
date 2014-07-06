'use strict';

angular.module('stormCrowApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'angularMoment'
])
  .config(function ($routeProvider, $locationProvider, $httpProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'pages/login'
      })
      .when('/login', {
        templateUrl: 'pages/login'
      })
      .when('/signup', {
        templateUrl: 'pages/signup'
      })
      .when('/settings', {
        templateUrl: 'pages/settings',
        authenticate: true
      })
      .when('/home', {
        templateUrl: 'pages/home',
        authenticate: true
      })
      .when('/game', {
        templateUrl: 'pages/game',
        authenticate: true
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);

    // Intercept 401s and redirect you to login
    $httpProvider.interceptors.push(['$q', '$location', function($q, $location) {
      return {
        'responseError': function(response) {
          if(response.status === 401) {
            $location.path('/login');
            return $q.reject(response);
          }
          else {
            return $q.reject(response);
          }
        }
      };
    }]);
  })
  .run(function ($rootScope, $location, Auth) {

    // Redirect to login if route requires auth and you're not logged in
    $rootScope.$on('$routeChangeStart', function (event, next) {

      if (next.authenticate && !Auth.isLoggedIn()) {
        $location.path('/login');
      }
    });
  });