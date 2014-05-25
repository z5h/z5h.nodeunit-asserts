assert = require('nodeunit').assert;

assert.increases = function (measure, block, message) {
  var before = measure();
  block();
  var after = measure();
  var passes = before < after;
  if (!passes){
    assert.fail(after, before, message, '>', assert.increases);
  }
};

assert.decreases = function (measure, block, message) {
  var before = measure();
  block();
  var after = measure();
  var passes = before > after;
  if (!passes){
    assert.fail(after, before, message, '<', assert.decreases);
  }
};

assert.noChange = function (measure, block, message) {
  var before = measure();
  block();
  var after = measure();
  var passes = before === after;
  if (!passes){
    assert.fail(after, before, message, '==', assert.noChange);
  }
};

assert.includes = function (collection, members, message) {
  for (var i = 0; i < members.length; i++) {
    var obj = members[i];
    if (collection.indexOf(obj) < 0){
      assert.fail(obj, collection, message, 'in', assert.includes);
      break;
    }
  }
};

assert.excludes = function (collection, members, message) {
  for (var i = 0; i < members.length; i++) {
    var obj = members[i];
    if (collection.indexOf(obj) > -1){
      assert.fail(obj, collection, message, 'not in', assert.excludes);
      break;
    }
  }
};

