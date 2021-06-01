const Operations = require('./calculator');

describe("Calculator tests", () => {
    test('adding 1 + 2 should return 3', () => {
      expect(Operations.sum(1, 2)).toBe(3);
    });
   
   test("the difference between 5 and 2 should return 3", () => {
  
    // assert
    expect(Operations.difference(5,2)).toBe(3);
  });
});