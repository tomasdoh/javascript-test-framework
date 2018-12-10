var describe = function (description, fn) {
  console.log(description);
  fn();
};

var it = function(message, fn) {
  describe(" " + message, fn);
};

var assertEqual = function(value, assertion) {
    if (value === assertion) {
      console.log('Pass! 😀')
      return true
    } else {
      console.log('Fail. ' + value + ' does not equal ' + assertion)
      return false
    }
  };
