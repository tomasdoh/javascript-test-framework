
var describe = function (description, fn) {
  console.log(description);
  fn();
};

var it = function(message, fn) {
  describe(" " + message, fn);
};

var toBe = function(value, assertion) {
    if (value === assertion) {
      console.log('Pass')
      return true
    } else {
      console.log('Fail')
      return false
    }
  }

var expect = function(value) {
   toBe(value);
};

describe("Square", function() {
  it('calculates the area of a square', function() {
    var area = 4
    expect(area).toBe(4);
  })
});
