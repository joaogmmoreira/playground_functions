// Desafio 1
function compareTrue(valueA, valueB) {
  // seu código aqui
  if (valueA === true && valueB === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height)/2
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
 
    return (string.split(' '));
  }

// Desafio 4
function concatName(arrStrings) {
  // seu código aqui
  for (let i = 0; i <= arrStrings.length; i ++){
    return arrStrings[arrStrings.length - 1] + ', ' + arrStrings[0];
  }
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
