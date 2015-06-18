module.exports = function() {
  var functions = [], self = this;

  this.go = function(cb) {
    if (functions.length) {
      functions.shift().apply(self, [function() {
        self.go(cb);
      }]);
    } else {
      cb.apply(self);
    }
  };
  this.use = function(fn) {
    functions.push(fn);
  };
};
