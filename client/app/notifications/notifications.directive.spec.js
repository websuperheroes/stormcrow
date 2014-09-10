'use strict';

describe('Directive: notifications', function () {

  // load the directive's module and view
  beforeEach(module('stormcrowApp'));
  beforeEach(module('app/notifications/notifications.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<notifications></notifications>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the notifications directive');
  }));
});