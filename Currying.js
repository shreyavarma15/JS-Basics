const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

console.log('CURRYING');

let multiply = (x, y) => {
  console.log(x * y);
};

let multiplyTwo = multiply.bind(this, 2);
multiplyTwo(3);

function multiple(x) {
  return function (y) {
    console.log(x * y);
  };
}

let multipletwo = multiple(4);
multipletwo(3);
