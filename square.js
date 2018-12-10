function Square (length) {
  this.length = length
  };

Square.prototype.area = function () {
  this.length * this.length
};
