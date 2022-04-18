// Desafio 11
function generatePhoneNumber(telephoneNum){
  // seu código aqui
}  

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  if (lineA < Math.abs(lineB + lineC) && lineB < Math.abs(lineA + lineC) && lineC < Math.abs(lineA + lineB)) {
    return true;

  } else {
    return false;
  }
}

// Desafio 13
function hydrate(str) {
  // seu código aqui
  let pattern = /[0-9]/g;
  let result = str.match(pattern);
  
  //console.log(typeof result);
  
  for (let i = 0; i < result.length; i++) {
    result[i] = parseInt(result[i]);    
    //console.log(result);
      
  }
  var sum = 0;
  for (let i = 0; i< result.length; i ++) {
    sum = sum + result[i];
    //console.log(sum);

  }
    
  if (sum > 1) {
    return sum + ' copos de água';

  } else {
    return sum + ' copo de água';
  }
}








  /*newArr = str.split(' ');
  console.log(newArr);
  for (let i = 0; i < newArr.length; i ++) {
    newArr[i] = parseInt(newArr[i]);
    //console.log(newArr);
    console.log(newArr2);
  }
  return console.log('a soma é' + sum);*/

    

hydrate("1 cachaça, 5 cervejas e 1 copo de vinho");

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
