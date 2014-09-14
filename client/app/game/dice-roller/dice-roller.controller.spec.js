'use strict';

describe('Controller: DiceRollerCtrl', function () {

  // load the controller's module
  beforeEach(module('stormcrow'));

  var DiceRollerCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DiceRollerCtrl = $controller('DiceRollerCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
