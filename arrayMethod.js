const x = { a: 1, b: 2, f: { x: 8 } };
const y = { c: 3, d: 4 };

const obj = { ...x }; //SHALLOW CLONE, also assign

obj.b = 9;
obj.f.x = 4;

// console.log(x);
// console.log(obj);

const obj2 = JSON.parse(JSON.stringify(x)); //DEEP CLONE

obj2.a = 34;
obj2.f.x = 88;

// console.log(x);
// console.log(obj2);

const z = { e: 12, f: 22 };

const yz = { ...y, ...z };
// console.log(yz);

const arr = [1, 2, 3, 4];
const newArr = arr.reduce((e, count) => {
  return e * count;
}, 0);

const arr1 = [1, 2, 3, 4];
const newArr1 = arr1.filter((e) => {
  return e === 2;
});

const arr2 = [1, 2, 3, 4];
const newArr2 = arr2.map((e) => {
  return e * 2;
});

const arr3 = [1, 2, 3, 4];
const newArr3 = arr3.slice(-1);

//Reduce, filter, Map , slice doesn't change existing array

const arr4 = [1, 2, 3, 4];
const newArr4 = arr4.splice(1, 3);

console.log(arr4);
console.log(newArr4);
