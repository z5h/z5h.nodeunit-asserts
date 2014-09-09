z5h.nodeunit-asserts
====================

extra nodeunit assertions

Example:

```
exports.suite = {
  'increases': function (t) {
    var x = 1;
    t.increases(
      function () {
        return x;
      },
      function () {
        x = x + 1;
      }
    );
    t.done();
  },
  'decreases': function (t) {
    var x = 1;
    t.decreases(
      function () {
        return x;
      },
      function () {
        x = x - 1;
      }
    );
    t.done();

  },
  'noChange': function (t) {
    var x = 1;
    t.noChange(
      function () {
        return x;
      },
      function () {
      }
    );
    t.done();
  },
  'includes': function (t) {
    t.includes([1,2,3], [3]);
    t.includes([1,2,3], [2]);
    t.includes([1,2,3], [1]);
    t.includes([1,2,3], [1,2,3]);
    t.includes([1,2,3], [3,1]);
    t.includes([1,2,3], []);
    t.done();
   },
  'excludes': function (t) {
    t.excludes([], []);
    t.excludes([], [3]);
    t.excludes([1,2], [3]);
    t.excludes([1,2], [0]);
    t.done();
  }
```
