module.exports = function(fn) {
  var result;

  return function() {
    if (!result) {
      var args = [].slice.call(arguments);
      result = fn.apply(null, args);
    }

    return result;
  }
};
