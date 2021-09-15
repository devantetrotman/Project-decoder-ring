const { expect } = require("chai");
const {caesar} = require("../src/caesar");

describe("caesar", () => {
  it("should return false if the shift value is not present, equal to 0, less than -25, or greater than 25.", () => {
    let input = "thinkful";
    let shift = 0;
    
    const actual = caesar(input,0);
    const expected = false;
    //console.log(actual);
    //console.log(expected);
    expect(actual).to.eql(expected);
  });
  
  it("should maintain spaces and non-alphabetic symbols.", () => {
    const input = "This is a secret message!";
    const shift = 8;
    
    const actual = caesar(input, 8);
    const expected = 'bpqa qa i amkzmb umaaiom!';
    expect(actual).to.eql(expected);
     });
  
  it("should encode an input message if encode is true", () => {
    let input = "thinkful";
    let shift = 3;
    
    const actual = caesar(input, shift);
    const expected = 'wklqnixo';
    //console.log(actual);
    //console.log(expected);
    expect(actual).to.eql(expected);
  });
  
  it("should decode an input message if encode is false", () => {
    let input = "wklqnixo";
    let shift = 3;
    
    const actual = caesar(input, shift, false);
    const expected = "thinkful";
    //console.log(actual);
    //console.log(expected);
    expect(actual).to.eql(expected);
  });
     
});
