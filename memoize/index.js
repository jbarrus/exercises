module.exports = function(fn) {
  var results = {};

  return function(arg) {
    var args = [].slice.call(arguments);
    var argsStr = args.join(',');

    if (!results.hasOwnProperty(argsStr)) {
      results[argsStr] = fn.apply(null, args);
    }

    return results[argsStr];
  };
};
