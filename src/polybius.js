// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    let encoded = [];
    let decrypt = [];
    let numberPairs = [];
    let arrayOfNumbers = [];
    let codedLetter2;
    let realLetter;
    let count;
    let pairs;
    let numbers;
    let message;
    let polycode;
    let codedLetter;
    let space;
    let spaceCounter = 0;
    let placement;
    let lowercaseConvertNumber = 86;
    let uppercaseConvertNumber = 54;
    if(encode == true){
      for (let i = 0; i < input.length; i++){
        let ascii = input[i].charCodeAt();
        if (ascii == 32){
          space = String.fromCharCode(ascii);
          polycode = 0;
          encoded.push(space);
        }
        if(ascii >= 65 && ascii <= 90){
              polycode = ascii - uppercaseConvertNumber;
          if(polycode == 20){polycode = 19;}
            }
        else if (ascii > 96 && ascii < 123){
          polycode = ascii - lowercaseConvertNumber;
          if(polycode == 20){polycode = 19;}
          console.log(polycode + "pc");
        }
        //if(polycode == 20){polycode = 19;}
        switch(true){
          case (polycode == 11 || polycode == 23):
            codedLetter = polycode + 0;
            console.log(codedLetter);
            break;
          case (polycode == 12 || polycode == 24):
            codedLetter = polycode + 9;
            console.log(codedLetter);
            break;
          case (polycode == 13 || polycode == 25):
            codedLetter = polycode + 18;
            console.log(codedLetter);
            break;
          case (polycode == 14 || polycode == 26):
            codedLetter = polycode + 27;
            console.log(codedLetter);
            break;
          case (polycode == 16 || polycode == 28):
            codedLetter = polycode - 4;
            console.log(codedLetter);
            break;
          case (polycode == 17 || polycode == 29):
            codedLetter = polycode + 5;
            console.log(codedLetter);
            break;
          case (polycode == 18 || polycode == 30):
            codedLetter = polycode + 14;
            console.log(codedLetter);
            break;
          case (polycode == 19 || polycode == 31):
            codedLetter = polycode + 23;
            console.log(codedLetter);
            break;
          case (polycode == 15):
            codedLetter = polycode + 36;
            console.log(codedLetter);
            break;
          case (polycode == 21):
            codedLetter = polycode + 31;
            console.log(codedLetter);
            break;
          case (polycode == 22):
            codedLetter = polycode - 9;
            console.log(codedLetter);
            break;
          case (polycode == 27):
            codedLetter = polycode - 13;
            console.log(codedLetter);
            break;
          case (polycode == 28):
            codedLetter = polycode - 4;
            console.log(codedLetter);
            break;
          case (polycode == 32):
            codedLetter = polycode - 17;
            console.log(codedLetter);
            break;
          case (polycode == 33):
            codedLetter = polycode - 8;
            console.log(codedLetter);
            break;
          case (polycode == 34):
            codedLetter = polycode + 1;
            console.log(codedLetter);
            break;
          case (polycode == 35):
            codedLetter = polycode + 10;
            console.log(codedLetter);
            break;
          case (polycode == 36):
            codedLetter = polycode + 19;
            console.log(codedLetter);
            break;
        }
        encoded.push(codedLetter);
      }
      if (encoded.includes(space)){
        for (let i = 0; i < encoded.length; i++){
          if (input[i] == space){
            encoded.splice(i+1, 1);
          }
      }
      }
        console.log(count);
      message = encoded.join("");
      console.log(message);
      return message;
      } 
    else{
      for (let i = 0; i < input.length; i++){
        if (input[i] == " "){
          spaceCounter++;
        }
      }
      if((input.length - spaceCounter) % 2 != 0) {
      return false;
      }
      for (let i = 0; i < input.length; i++){
        if (input[i] == " "){
          decrypt.push('5');
          decrypt.push('6');
        }
        else {decrypt.push(input[i]);
             }
      }
      for (let i = 0; i < decrypt.length; i+2){
        numbers = decrypt.splice(i, 2);
        numbers = numbers.join("");
        numberPairs.push(numbers);
      }
      for (let i = 0; i < numberPairs.length; i++){
        let num = parseInt(numberPairs[i]);
        arrayOfNumbers.push(num);
      }
      if (typeof arrayOfNumbers[0] == 'number'){
        console.log(true);
      }
      for (let i = 0; i < arrayOfNumbers.length; i++){
        switch(true){
          case (arrayOfNumbers[i] == 11 || arrayOfNumbers[i] == 23):
            codedLetter = arrayOfNumbers[i] + 86;
            console.log(codedLetter);
            break;
          case (arrayOfNumbers[i] == 21 || arrayOfNumbers[i] == 33):
            codedLetter = arrayOfNumbers[i] - 9;
            codedLetter += 86;
            console.log(codedLetter);
            break;
          case (arrayOfNumbers[i] == 31 || arrayOfNumbers[i] == 43):
            codedLetter = arrayOfNumbers[i] - 18;
            codedLetter += 86;
            console.log(codedLetter);
            break;
          case (arrayOfNumbers[i] == 41 || arrayOfNumbers[i] == 53):
            codedLetter = arrayOfNumbers[i] - 27;
            codedLetter += 86;
            console.log(codedLetter);
            break;
          case (arrayOfNumbers[i] == 12 || arrayOfNumbers[i] == 24):
            codedLetter = arrayOfNumbers[i] + 4;
            codedLetter += 86;
            console.log(codedLetter);
            break;
          case (arrayOfNumbers[i] == 22 || arrayOfNumbers[i] == 34):
            codedLetter = arrayOfNumbers[i] - 5;
            codedLetter += 86;
            console.log(codedLetter);
            break;
          case (arrayOfNumbers[i] == 32 || arrayOfNumbers[i] == 44):
            codedLetter = arrayOfNumbers[i] - 14;
            codedLetter += 86;
            console.log(codedLetter);
            break;
          case (arrayOfNumbers[i] == 42):
            codedLetter = arrayOfNumbers[i] - 23;
            codedLetter += 86;
            codedLetter2 = "j";
            console.log(realLetter);
            break;
          case (arrayOfNumbers[i] == 54):
            codedLetter = arrayOfNumbers[i] - 23;
            codedLetter += 86;
            console.log(codedLetter);
            break;
          case (arrayOfNumbers[i] == 51):
            codedLetter = arrayOfNumbers[i] - 36;
            codedLetter += 86;
            console.log(codedLetter);
            break;
          case (arrayOfNumbers[i] == 52):
            codedLetter = arrayOfNumbers[i] - 31;
            codedLetter += 86;
            console.log(codedLetter);
            break;
          case (arrayOfNumbers[i] == 13):
            codedLetter = arrayOfNumbers[i] + 9;
            codedLetter += 86;
            console.log(codedLetter);
            break;
          case (arrayOfNumbers[i] == 14):
            codedLetter = arrayOfNumbers[i] + 13;
            codedLetter += 86;
            console.log(codedLetter);
            break;
          case (arrayOfNumbers[i] == 15):
            codedLetter = arrayOfNumbers[i] + 17;
            codedLetter += 86;
            console.log(codedLetter);
            break;
          case (arrayOfNumbers[i] == 25):
            codedLetter = arrayOfNumbers[i] + 8;
            codedLetter += 86;
            console.log(codedLetter);
            break;
          case (arrayOfNumbers[i] == 35):
            codedLetter = arrayOfNumbers[i] - 1;
            codedLetter += 86;
            console.log(codedLetter);
            break;
          case (arrayOfNumbers[i] == 45):
            codedLetter = arrayOfNumbers[i] - 10;
            codedLetter += 86;
            console.log(codedLetter);
            break;
          case (arrayOfNumbers[i] == 55):
            codedLetter = arrayOfNumbers[i] - 19;
            codedLetter += 86;
            console.log(codedLetter);
            break;
          case (arrayOfNumbers[i] == 56):
            codedLetter = arrayOfNumbers[i] - 24;
            console.log(codedLetter);
            break;
        }
        realLetter = String.fromCharCode(codedLetter);
        
        encoded.push(realLetter);
        if (codedLetter2){encoded.push(codedLetter2);}
      }
      message = encoded.join("");
      //console.log(placement)
      console.log(message);
      return message;
      }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
