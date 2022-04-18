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
  return (base * height)/2;
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

// Desafio 6 COMPLETO!
function highestCount(arr) {
  // seu código aqui
  let largest = [-100];
  let count = 0;
    
  for (let i = 0; i <= arr.length; i ++){
    if (arr[i] > largest){
        largest = arr[i];
        //console.log(largest);
        //console.log(arr);
    }
  }
  for (let j = 0; j <= arr.length; j ++){
    if (largest == arr[j]){
      count ++;
    }
  }
  return count;
}

// Desafio 7 COMPLETO!
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

// Desafio 8 COMPLETO!
function fizzBuzz(arr) {
  // seu código aqui
  retorno = [];
  for (let index = 0; index < arr.length; index ++){

    if (arr[index] % 3 === 0 && arr[index] % 5 !== 0){
      retorno.push('fizz');
      
    }else if (arr[index] % 3 !== 0 && arr[index] % 5 === 0){
      retorno.push('buzz');      

    }else if (arr[index] % 3 === 0 && arr[index] % 5 === 0){
      retorno.push('fizzBuzz');

    }else {
      retorno.push('bug!');
    }
  }
  return retorno;
}

fizzBuzz ([2, 15, 7, 9, 45]);

// Desafio 9 COMPLETO!
function encode(encoded) {
  // seu código aqui
let word = encoded.split('');


  for (let i = 0; i <= word.length; i ++){
    if (word[i] === 'a'){
      word[i] = '1'; 

    }else if (word[i] === 'e') {
      word[i] = '2';

    }else if (word[i] === 'i') {
      word[i] = '3';

    }else if (word[i] === 'o') {
      word[i] = '4';

    }else if (word[i] === 'u') {
      word[i] = '5';
    }
        
  }
  word2 = word.join('');
  return word2;
}



function decode(decoded) {
  // seu código aqui
  let word3 = decoded.split('');

  for (let j = 0; j <= word3.length; j++){
    if (word3[j] === '1'){
      word3[j] = 'a'; 

    }else if (word3[j] === '2') {
      word3[j] = 'e';

    }else if (word3[j] === '3') {
      word3[j] = 'i';

    }else if (word3[j] === '4') {
      word3[j] = 'o';

    }else if (word3[j] === '5') {
      word3[j] = 'u';
    }
  }
  word4 = word3.join('');
  return word4;

}

// Desafio 10 INCOMPLETO!
function techList(arr, name) {
  // seu código aqui
  let obj = [{}];
  for (let i = 0; i < arr.length; i ++){
    if (arr.length > 0){
      obj.tech = arr[i];
      obj.name = name;
      return obj;

    }else {
      obj = ['Vazio!'];
      return obj;
    }
  }
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
