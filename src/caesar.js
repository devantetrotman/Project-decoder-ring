// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    let encoded = [];
    let message;
    if (encode == false){
      if (shift == 0 || shift < -25 || shift > 25){
      return false
    }
    else{
      for (let i = 0; i < input.length; i++){
        let ascii = input[i].charCodeAt();
        if (ascii <= 64 || (ascii > 90 && ascii < 97) || ascii > 122){
          let codeSymbol = String.fromCharCode(ascii);
          console.log(codeSymbol);
          encoded.push(codeSymbol);
        } else {
          if(ascii >= 65 && ascii <= 90){
            ascii += 32; 
          }
          let shiftedValue = ascii - shift;
          if (shiftedValue > 122) {
            shiftedValue = shiftedValue-122+96;
          }
          if (shiftedValue<97) {
            shiftedValue = shiftedValue+122-96;
          }
          let codeLetter = String.fromCharCode(shiftedValue);
          //console.log(codeLetter);
          encoded.push(codeLetter);
        }
      }
    }
    message = encoded.join("");
   // console.log(encoded);
    console.log(message);
    return message
    }
    
    if (shift == 0 || shift < -25 || shift > 25){
      return false
    }
    else{
      for (let i = 0; i < input.length; i++){
        let ascii = input[i].charCodeAt();
        if (ascii <= 64 || (ascii > 90 && ascii < 97) || ascii > 122){
          let codeSymbol = String.fromCharCode(ascii);
          console.log(codeSymbol);
          encoded.push(codeSymbol);
        } else {
          if(ascii >= 65 && ascii <= 90){
            ascii += 32; 
          }
          let shiftedValue = ascii + shift;
          if (shiftedValue > 122) {
            shiftedValue = shiftedValue-122+96;
          }
          if (shiftedValue<97) {
            shiftedValue = shiftedValue+122-96;
          }
          let codeLetter = String.fromCharCode(shiftedValue);
          //console.log(codeLetter);
          encoded.push(codeLetter);
        }
      }
    }
    message = encoded.join("");
   // console.log(encoded);
    console.log(message);
    return message
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
