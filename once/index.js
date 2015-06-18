module.exports = function(fn) {
  var result;

  return function() {
    if (!result) {
      result = this;
      var args = [].slice.call(arguments);
      fn.apply(result, args);
    }

    return result;
  }
};
