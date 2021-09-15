const { expect } = require("chai");
const {substitution} = require("../src/substitution");

describe("substitution", () => {
  it("should use the appropriate alphabet to encode input", () => {
    let input = "thinkful";
    const alphabet = "xoyqmcgrukswaflnthdjpzibev";
    
    const actual = substitution(input, alphabet);
    const expected = 'jrufscpw';
    //console.log(actual);
    //console.log(expected);
    expect(actual).to.eql(expected);
  });
  
  it("should use the appropriate alphabet to decode input", () => {
    const input = "jrufscpw";
    const alphabet = "xoyqmcgrukswaflnthdjpzibev";
    
    const actual = substitution(input, alphabet, false);
    const expected = "thinkful";
    expect(actual).to.eql(expected);
     });
});
