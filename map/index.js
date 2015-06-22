module.exports = function(items, fn, ctx) {
  var result = [];

  for (var i=0; i<items.length; i++) {
    result.push(fn.call(ctx, items[i], i, items));
  }

  return result;
};
