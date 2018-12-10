describe("Square", function() {
  it('calculates the area of a square', function() {
    var square = new Square(2);
    assertEqual(square.area(), 4);
  })
});
