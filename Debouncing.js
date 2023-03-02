import React from 'react';

console.log('DEBOUNCING');

const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

function getData() {
  console.log('Get data');
}

function throttle(fn, d) {
  let flag = true;
  return function () {
    if (flag) {
      fn();
      flag = false;
    }
    setTimeout(() => {
      fn();
      flag = false;
    }, d);
  };
}

const betterFunction = throttle(getData, 30000);

window.addEventListener('resize', betterFunction);
