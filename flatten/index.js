module.exports = function flatten(items) {
  var result = [];

  if (Array.isArray(items)) {
    items.forEach(function(item) {
      result = result.concat(flatten(item));
    });
  } else {
    result = items;
  }

  return result;
};
