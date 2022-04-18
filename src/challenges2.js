// Desafio 11
function generatePhoneNumber(phoneNum){
  // seu código aqui

  if (phoneNum.length !== 11) {
    //console.log('tamanho');
    return 'Array com tamanho incorreto.'
  }

  for (let i = 0; i < phoneNum.length; i++) {
    let count = 0;      

    for (let j = 0; j < phoneNum.length; j ++){
      

      if (phoneNum[j] === phoneNum[i]){
        count = count + 1;
        //console.log(count);

        if (count >= 3){
          return 'não é possível gerar um número de telefone com esses valores';
        }        
      }

    }
    if (phoneNum[i] < 0 || phoneNum[i] > 9) {
      //console.log('valor');
      return 'não é possível gerar um número de telefone com esses valores';
    
    }  
      
  }
  return '(' + phoneNum[0] + phoneNum[1] + ') ' + phoneNum[2] + phoneNum[3] + phoneNum[4] + phoneNum[5] + phoneNum[6] + '-' + phoneNum[7] + phoneNum[8] + phoneNum[9] + phoneNum[10];
}
  

generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 1]);

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
