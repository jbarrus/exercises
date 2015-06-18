module.exports = function(max, functions) {
  var results = [];
  var running = 0;
  var callbacks = [];

  while(running < max) {
    running++;
    functions.shift()().then(function(result) {
      running--;
      results.push(result);

      if (running === 0) {
        callbacks.forEach(function(cb) {
          cb(results);
        })
      }
    });
  }

  return {
    then: function(cb) {
      callbacks.push(cb);
    }
  };


  //var last = new Date() - delay;
  //
  //return function throttle() {
  //  var self = this;
  //  var args = [].slice.call(arguments);
  //
  //  var diff = new Date() - last;
  //  if (diff >= delay) {
  //    last = new Date();
  //    return fn.apply(self, args);
  //  } else {
  //    setTimeout(function() {
  //      throttle.apply(self, args);
  //    }, delay - diff);
  //  }
  //}
};
