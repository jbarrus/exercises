module.exports = mergesort;

function mergesort(items) {
  if (items.length <= 1) {
    return items;
  }

  var middle = items.length / 2;
  return merge(mergesort(items.slice(0, middle)), mergesort(items.slice(middle, items.length)));
}

function merge(left, right) {
  var result = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while (left.length) {
    result.push(left.shift());
  }
  while (right.length) {
    result.push(right.shift());
  }

  return result;
}
