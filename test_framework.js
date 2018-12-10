// Test framework

var describe = function (description, fn) {
  console.log(description);
  fn();
};

var it = function(message, fn) {
  describe(" " + message, fn);
};

var assertEqual = function(value, assertion) {
    if (value === assertion) {
      var output = document.getElementById("output");
      output.innerHTML = 'Pass! 😀';
    } else {
      var output = document.getElementById("output");
      output.innerHTML = 'Fail. ' + value + ' does not equal ' + assertion;
    }
  };
