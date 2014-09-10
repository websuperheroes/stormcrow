'use strict';

angular.module('stormcrowApp')
  .controller('MainCtrl', function ($rootScope, $scope, $http, socket, Auth) {

    $scope.allTasks = [];
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.currentUser = Auth.getCurrentUser();

    $http.get('/api/tasks').success(function(allTasks) {
      $scope.allTasks = allTasks;
      socket.syncUpdates('task', $scope.allTasks);
    });

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/tasks', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(task) {
      $http.delete('/api/tasks/' + task._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('task');
    });

  });