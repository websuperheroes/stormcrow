'use strict';

describe('Controller: EventLogCtrl', function () {

  // load the controller's module
  beforeEach(module('stormcrow'));

  var EventLogCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EventLogCtrl = $controller('EventLogCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
