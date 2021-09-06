const { assert } = require("chai");
const { titleCase } = require("../js/titleCase");

describe("Titlecase Tests", function () {
  it("should return an empty string, given an empty string", () => {
    assert.equal(titleCase(""), "");
  });
  it("should return a titlecased string back properly given option I.E first word must be capitalized even if it matches", () => {
    assert.equal(
      titleCase("a clash of KINGS", "a an the of"),
      "A Clash of Kings",
    );
  });
  it("should return properly titlecased word given sec param", () => {
    assert.equal(
      titleCase("THE WIND IN THE WILLOWS", "The In"),
      "The Wind in the Willows",
    );
  });

  it("given no second param should titlecased", () => {
    assert.equal(titleCase("the quick brown fox"), "The Quick Brown Fox");
  });
});
