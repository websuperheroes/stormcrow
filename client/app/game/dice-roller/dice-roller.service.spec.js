'use strict';

describe('Service: diceRoller', function () {

  // load the service's module
  beforeEach(module('stormcrow'));

  // instantiate service
  var diceRoller;
  beforeEach(inject(function (_diceRoller_) {
    diceRoller = _diceRoller_;
  }));

  it('should do something', function () {
    expect(!!diceRoller).toBe(true);
  });

});
