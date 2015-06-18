module.exports = doThunk;

function doThunk(fn) {
  return function(cb) {
    fn.apply(null, [function(err, result) {
      if (typeof result === 'function') {
        doThunk(result)(cb);
      } else {
        cb(err, result);
      }
    }]);
  }
}
