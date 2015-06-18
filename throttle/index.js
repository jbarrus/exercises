module.exports = function(fn, delay) {
  var last = new Date() - delay;

  return function throttle() {
    var self = this;
    var args = [].slice.call(arguments);

    var diff = new Date() - last;
    if (diff >= delay) {
      last = new Date();
      return fn.apply(self, args);
    } else {
      setTimeout(function() {
        throttle.apply(self, args);
      }, delay - diff);
    }
  }
};
