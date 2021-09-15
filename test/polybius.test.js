const { expect } = require("chai");
const {polybius} = require("../src/polybius");

describe("polybius", () => {
  it("should encode an input string into a string of numbers", () => {
    let input = "Hello world";
    
    const actual = polybius(input);
    const expected = '3251131343 2543241341';
    //console.log(actual);
    //console.log(expected);
    expect(actual).to.eql(expected);
  });
  
  it("should decode an input of a string of numbers into an alphabetic string.", () => {
    const input = '3251131343 2543241341';
    
    const actual = polybius(input, false);
    const expected = "hello world";
    expect(actual).to.eql(expected);
     });
});
