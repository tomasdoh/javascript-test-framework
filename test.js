
var describe = function (description, fn) {
  console.log(description);
  fn();
};

var it = function (message, callback) {
  describe(" " + message, fn);
};
