// Import stylesheets
import './style.css';

// Write Javascript code!
// const appDiv = document.getElementById('app');
// appDiv.innerHTML = `<h1>JS Starter</h1>`;

const obj = {
  firstname: 'Shreya',
  lastname: 'Varma',
  printName: function (city, state) {
    console.log(this.firstname, this.lastname, city, state);
  },
};

obj.printName('Dhule', 'MH');

const obj2 = {
  firstname: 'Jyoti',
  lastname: 'Varma',
};

const print = obj.printName.bind(obj2, 'Nagpur');
// const printName2 = obj.printName.bind(obj2);
print('MH');

Function.prototype.myBind = function (...args) {
  let obj = this;
  let params = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};

const printName2 = obj.printName.myBind(obj2, 'pohana');
printName2('MH');
