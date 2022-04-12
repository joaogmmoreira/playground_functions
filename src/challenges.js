// Desafio 1 COMPLETO!
function compareTrue(valueA, valueB) {
  // seu código aqui
  if (valueA === true && valueB === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2 COMPLETO!
function calcArea(base, height) {
  // seu código aqui
  return (base * height)/2
}

// Desafio 3 COMPLETO!
function splitSentence(string) {
  // seu código aqui
 
    return (string.split(' '));
  }

// Desafio 4 COMPLETO!
function concatName(arrStrings) {
  // seu código aqui
  for (let i = 0; i <= arrStrings.length; i ++){
    return arrStrings[arrStrings.length - 1] + ', ' + arrStrings[0];
  }
}

// Desafio 5 COMPLETO!
function footballPoints(wins, ties) {
  // seu código aqui
  return wins*3 + ties;
}

// Desafio 6 INCOMPLETO
function highestCount(arr) {
  // seu código aqui
}


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  if (Math.abs(cat1 - mouse)> Math.abs(cat2 - mouse)){
    return 'cat2';
  
  }else if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)){
    return 'cat1';

  }else{
    return 'os gatos trombam e o rato foge'
  }
}

// Desafio 8 INCOMPLETO
function fizzBuzz(arr) {
  // seu código aqui
  retorno = [];
  for (let index = 0; index < arr.length; index ++){

    if (arr[index] % 3 === 0 && arr[index] % 5 !== 0){
      retorno.push('fizz');
      
    }else if (arr[index] % 3 !== 0 && arr[index] % 5 === 0){
      retorno.push('buzz');      

    }else if (arr[index] % 3 === 0 && arr[index] % 5 === 0){
      retorno.push('fizzbuzz');
      retorno.pop();

    }else {
      retorno.push('bug!');
    }
  }
  return retorno;
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
