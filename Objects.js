let obj = {
  a: 'car',
  b: 'Bike',
};

let obj2 = obj;
obj2.b = 'scooty';

let obj3 = Object.assign({}, obj);
obj3.b = 'Plane';

let obj4 = Object.create(obj);

console.log(obj);
console.log(obj2);
console.log(obj3);
console.log(obj4);

let a = 10;
let b = a;
b = 20;
a = 90;

console.log(a);
console.log(b);
