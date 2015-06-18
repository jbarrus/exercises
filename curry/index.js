module.exports = function curry(fn) {
  var args = argsToArray(arguments);

  if (fn.length === args.length - 1) {
    return fn.apply(undefined, args.slice(1));
  }
  return function() {
    return curry.apply(undefined, args.concat(argsToArray(arguments)));
  };
};

function argsToArray(args) {
  return [].slice.call(args, 0);
}
