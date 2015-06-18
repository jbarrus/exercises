module.exports = function(fn, delay) {
  var timeoutId;

  return function() {
    var self = this;
    var args = [].slice.call(arguments);

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(function() {
      return fn.apply(self, args);
    }, delay);
  }
};
