// Calculate area of given triangle. Create a function t_area that will take a string which will represent triangle, find area of the triangle, one space will be equal to one length unit. The smallest triangle will have one length unit.



// ------------------------------------------------------------------
const chai = require("chai");
const assert = chai.assert;

describe("Basic test", function() {
  it("First triangle area", function() {
    assert.equal(tArea('\n.\n. .\n'), 0.5)
  });

  it("Second triangle area", function() {
    assert.equal(tArea('\n.\n. .\n. . .\n'), 2)
  });

  it("Third triangle area", function() {
    assert.equal(tArea('\n.\n. .\n. . .\n. . . .\n. . . . .\n. . . . . .\n. . . . . . .\n. . . . . . . .\n. . . . . . . . .\n'), 32)
  });

  it("Forth triangle area", function() {
    assert.equal(tArea('\n.\n. .\n. . .\n. . . .\n. . . . .\n'), 8)
  });
});
// ---------------------------------------------------------------------



function tArea(tStr) {
  let tArr = tStr.split("\n").slice(1, -1),
      base = tArr.length - 1

  return base ** 2 / 2
}
