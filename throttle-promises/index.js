var Promise = Promise | require('../node_modules/promise-polyfill/Promise');

module.exports = function(max, functions) {
  console.log('max', max);

  return new Promise(function(resolve) {
    //var results = [];
    //var running = 0;
    //
    //queue();
    //queue();
    //queue();
    //queue();
    //queue();
    //queue();
    //queue();
    //
    //function queue() {
    //  if (running < max) {
    //    running++;
    //    functions.shift()().then(function(result) {
    //      running--;
    //      results.push(result);
    //
    //      if (running === 0) {
    //        resolve(results);
    //      }
    //    });
    //  }
    //}
  });
};
