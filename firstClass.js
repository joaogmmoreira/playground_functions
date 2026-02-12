// let firstName = 'Moreira';
// Tipo string'

// let age1 = 35;
// let age2 = '35';
// // Tipo number
// console.log(age1);
// console.log(age2);

// console.log(age1 + age1);
// console.log(age2 + age2);

// console.log(typeof age1);
// console.log(typeof age2);

// console.log(age1 == age2); // true, comparação de valor
// console.log(age1 === age2); // false, comparação de valor e tipo

// console.log(age1 + age2);

// console.log(age1 + Number(age2));

// let firstName = 'João';
// let lastName = 'Moreira';

// eslint-disable-next-line prefer-template
// console.log(firstName + ' ' + lastName);
// console.log(`${firstName} ${lastName}`);
// console.log(`Meu nome é um nome muito feio: ${age1} ${firstName} ${lastName}`);

// let undefinedVariable;
// console.log(undefinedVariable);
// // undefined

// let nullVariable = null;
// console.log(nullVariable);
// // Tipo null

let isStudent = false;
let isEmployed = true;
console.log(typeof isStudent);
console.log(typeof isEmployed);
// Tipo boolean

// let person = {
//   name: 'Maria',
//   age: 28,
//   isStudent: true,
//   chave: 'valor',
// };
// Tipo object

let numberArray = ['a', 'b', 'c', 'd', 'e', 'f'];
// O último índice de um array é sempre o tamanho do array - 1,
//  pois os índices começam em 0

// console.log(numberArray.length);
console.log('Tamanho do array:', numberArray.length);
console.log('último índice do array:', numberArray.length - 1);
console.log(numberArray[4]);
console.log(numberArray[numberArray.length - 1]);

let array = [1, 'string', true, null, undefined, { name: 'object' }, [1, 2, 3]];
// Mostre todos os elementos do array em um console.log e seus tipos

// console.log(person);
// console.log(person.name);
// console.log(person.age);
// console.log(person.isStudent);

// console.log(numberArray);
// console.log(numberArray[0]);

// console.log(numberArray.length);

// console.log(numberArray.length - 1);
// console.log(numberArray[numberArray.length - 1]);

let objectArray = [
  { name: 'Ana', age: 22 }, // índice 0
  { name: 'Bruno', age: 25 }, // índice 1
  { name: 'Carla', age: 30 }, // índice 2
];

// console.log(objectArray[0].name);
// console.log(objectArray[1].name);
// console.log(objectArray[2].name);
// console.log(objectArray[3].name);

// Iterar sobre o array de objetos

// eslint-disable-next-line operator-assignment
for (let i = 0; i < objectArray.length; i = i + 1) {
  console.log('Valor de i:', i);
  console.log(objectArray[i].name);
  console.log(objectArray[i].age);
  console.log(`o aluno ${objectArray[i].name} tem ${objectArray[i].age} anos`);
}

// Printe na tela todos os nomes e status dos objetos dentro do array
// LOOP FOR JS

// i ++
// i = i + 1
// i += 1

let student = [
  {
    name: 'Eduardo',
    age: 20,
    status: false,
  },
  {
    name: 'Fernanda',
    age: 22,
    status: true,
  },
  {
    name: 'Gustavo',
    age: 19,
    status: false,
  },
  {
    name: 'Helena',
    age: 21,
    status: true,
  },
];

for (let i = 0; i < student.length; i += 1) {
  if (student[i].status === true) {
    console.log(
      `O aluno ${student[i].name}, com ${student[i].age} anos, se formou`,
    );
  } else {
    console.log(
      `O aluno ${student[i].name}, com ${student[i].age} anos, não se formou`,
    );
  }
}
