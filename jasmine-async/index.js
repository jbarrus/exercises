module.exports = function(test) {
  var inst = new test();
  inst.setup(function() {
    inst.test();
  });
};
