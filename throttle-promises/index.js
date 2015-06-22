var Promise = Promise || require('../node_modules/promise-polyfill/Promise');

module.exports = function(max, functions) {
  var promise = new Promise(function(resolve) {
    var results = [];
    var running = 0;

    for (var i=0; i<max; i++) {
      queue();
    }

    function queue() {
      if (running < max && functions.length) {
        running++;
        //console.log('queue, running=', running);
        functions.shift()().then(function(result) {
          running--;
          //console.log('took one, left=', functions.length, 'running=', running);
          results.push(result);

          if (running === 0) {
            resolve(results);
          } else {
            queue();
          }
        });
      }
    }
  });

  return promise;
};
