// let firstName = 'João';
// Tipo string

// let age1 = 35;
// let age2 = '35';
// // Tipo number
// console.log(age1);
// console.log(age2);
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
// undefined

// let nullVariable = null;
// Tipo null

// let isStudent = false;
// Tipo boolean

let person = {
  name: 'Maria',
  age: 28,
  isStudent: true,
  chave: 'valor',
};
// Tipo object

let numberArray = [1, 2, 3, 4, 5];

// console.log(person);
// console.log(person.name);
// console.log(person.age);
// console.log(person.isStudent);

console.log(numberArray);
console.log(numberArray[0]);

console.log(numberArray.length);

console.log(numberArray.length - 1);
console.log(numberArray[numberArray.length - 1]);

let objectArray = [
  { name: 'Ana', age: 22 }, // índice 0
  { name: 'Bruno', age: 25 }, // índice 1
  { name: 'Carla', age: 30 }, // índice 2
];

console.log(objectArray[0].name);
console.log(objectArray[1].name);
console.log(objectArray[2].name);
// console.log(objectArray[3].name);

// Iterar sobre o array de objetos

// eslint-disable-next-line operator-assignment
// for (let i = 0; i < objectArray.length; i = i + 1) {
//   console.log('Valor de i:', i);
//   console.log(objectArray[i].name);
// }

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
