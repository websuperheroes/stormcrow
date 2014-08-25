'use strict';

describe('Controller: TurnOrderCtrl', function () {

  // load the controller's module
  beforeEach(module('stormcrowApp'));

  var TurnOrderCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TurnOrderCtrl = $controller('TurnOrderCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
