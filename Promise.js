console.log('pROmise');

const getOrder = () => {
  const pr = new Promise((resolve, reject) => {
    let orderId = '123';
    if (!orderId) {
      const err = new Error('No Order id');
      reject(err);
    }
    if (orderId) {
      resolve(orderId);
    }
  });
  return pr;
};

const promise = getOrder();

promise
  .then(() => {
    console.log('next call');
  })
  .then(() => {
    console.log('next next call');
  })
  .catch((err) => {
    alert(err);
  });

function sum(a, b) {
  console.log(a + b);
}

var arr = [5, 2];

console.log(sum(...arr));

function f1(...args) {
  console.log(args);
}

f1(1, 2, 3, 4, 5);
const obj = { a: 1, b: 2 };
const { a, b } = obj;
console.log(a);

let p = new Promise((resolve, reject) => {
  let x = 1;
  if (x === 2) {
    resolve('Success');
  }
  reject('Fail');
});

p.then((message) => {
  console.log(message);
}).catch((err) => {
  console.log(err);
});
