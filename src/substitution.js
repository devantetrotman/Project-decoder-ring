// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    let codedMessage = [];
    let orderedAlphabet = [];
    let message;
    let valuesAlreadySeen = [];
    let numOfLetter;
    let numArray = [];
    let letterArray = [];
    let number;
    let letter;
    
    
    if (!alphabet || alphabet.length != 26){return false;}
    for (let i = 0; i < alphabet.length; i++) {
    let value = alphabet[i]
    if (valuesAlreadySeen.indexOf(value) !== -1) {
        return false;
        }
        valuesAlreadySeen.push(value)
      }
    if (encode == true){
      for (let i = 0; i < input.length; i++){
        let number = input[i].charCodeAt();
        number -= 97;
        orderedAlphabet.push(number);
      }
      console.log(orderedAlphabet);
      for (let i = 0; i < orderedAlphabet.length; i++){
        let num = orderedAlphabet[i];
        if (num == -65){
          let letter = " ";
          codedMessage.push(letter)}
        else{
          let letter = alphabet[num];
        codedMessage.push(letter);
            }
      }
      console.log(codedMessage);
      message = codedMessage.join("");
      console.log(message);
      return message;
  }
    else{
      console.log(input);
      console.log(alphabet);
      for (let i = 0; i < input.length; i++){
        let count = 0;
        for (let j = 0; j < alphabet.length; j++){
          if (input[i] != alphabet[j]){
            if (input[i] == " "){
              numArray.push(-65);break;}
            //let count = 0;
            else{count++;}
          }
          else{numArray.push(count);}
      }
    }
      console.log(numArray);
       for (let i = 0; i < numArray.length; i++){
         number = numArray[i] + 97;
         letter = String.fromCharCode(number);
         letterArray.push(letter);
       }
         console.log(letterArray);
      message = letterArray.join("");
      console.log(message);
      return message;
  }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
