
module.exports = {
  sequence: function(functions) {
    return function(cb) {
      var error, result;

      doNext();

      function doNext() {
        functions.shift().apply(null, [function(err, res) {
          error = err;
          result = res;

          if (functions.length) {
            doNext();
          } else {
            cb(err, result);
          }
        }, result]);
      }
    }
  },
  parallel: function(functions) {
    return function(cb) {
      var errors = [];
      var results = [];

      functions.forEach(function(fn) {
        fn.apply(null, [function(err, res) {
          errors.push(err);
          results.push(res);

          if (results.length === functions.length) {
            cb(errors, results);
          }
        }]);
      });
    }
  },
  race: function(functions) {
    var completed = false;
    return function(cb) {
      functions.forEach(function(fn) {
        fn.apply(null, [function(err, res) {
          if (!completed) {
            cb(err, res);
            completed = true;
          }
        }]);
      });
    }
  }
};
