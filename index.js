let arr = [1, 2, 3, 4];
let res = arr;

res = [];
// console.log(arr, res);

// Remove duplicate items in an array
// First method using reduce
const myArray = ['a', 'a', 'b', 'b', 'c', 'c', 'e'];
const myArrayWithNoDuplicates = myArray.reduce((accumulator, currentValue) => {
  if (!accumulator.includes(currentValue)) {
    return [...accumulator, currentValue];
  }
  return accumulator;
}, []);

console.log(myArrayWithNoDuplicates);

// Second method using Set
const ans = [...new Set(myArray)];
console.log(ans);

let myArray1 = [1, 1, 1, 2, 2, 2, 3, 3, 4, 4];

let result = [];
for (i = 0; i < myArray1.length; i++) {
  if (result.indexOf(myArray1[i]) == -1) {
    result.push(myArray1[i]);
  }
}

console.log('new', result);

var sound = 'grunt';
var bear = {
  sound: 'roar',
};

function roar() {
  console.log(this.sound);
}
roar();

let obj = { a: 1, b: 2, c: 3 };
console.log(Object.getOwnPropertyNames(obj));
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(obj.hasOwnProperty('a'));
