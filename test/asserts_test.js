require('../');
//test the new assertions we've created
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
  }
};
