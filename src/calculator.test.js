const Operations = require('./calculator');

describe("Calculator tests", () => {
    test('adding 1 + 2 should return 3', () => {
      expect(Operations.sum(1, 2)).toBe(3);
    });
   })