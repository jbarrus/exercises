module.exports = function(options, callback) {
  var chars = options.message.split('');
  if (chars.length) {
    options.toggle();
    next();
  }

  function next(previousChar) {
    if (!chars.length) {
      callback();
    } else {
      var char = chars.shift();
      if (char != ' ' && previousChar && previousChar !== ' ') {
        dots(3, function() {
          processChar(char, next);
        });
      } else {
        processChar(char, next);
      }
    }
  }

  function processChar(char, callback) {
    if (char === ' ') {
      dots(7, function() {
        callback(char);
      });
    } else {
      processCode(options.codes[char].split(''), function() {
        callback(char);
      });
    }
  }

  function processCode(code, callback) {
    if (!code.length) {
      callback();
    } else {
      var dotOrDash = code.shift();

      var cb = function() {
        if (code.length > 0) {
          //if there's more to the code, add a dot after
          dots(1, function() {
            processCode(code, callback);
          });
        } else {
          processCode(code, callback);
        }
      };

      if (dotOrDash === '.') {
        dots(1, cb);
      } else if (dotOrDash === '-') {
        dots(3, cb);
      } else {
        throw new Error('unkown code ' + dotOrDash);
      }
    }
  }

  function dots(count, callback) {
    options.timeouter(function() {
      options.toggle();
      callback();
    }, count);
  }
};
