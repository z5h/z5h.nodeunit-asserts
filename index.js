assert = require('nodeunit').assert;

assert.increases = function (measure, block, message) {
  var before = measure();
  block();
  var after = measure();
  var passes = before < after;
  if (!passes){
    assert.fail(before, after, message, 'is not <', assert.increases);
  }
};

assert.decreases = function (measure, block, message) {
  var before = measure();
  block();
  var after = measure();
  var passes = before > after;
  if (!passes){
    assert.fail(before, after, message, 'is not >', assert.decreases);
  }
};

assert.noChange = function (measure, block, message) {
  var before = measure();
  block();
  var after = measure();
  var passes = before === after;
  if (!passes){
    assert.fail(before, after, message, 'is not =', assert.noChange);
  }
};
