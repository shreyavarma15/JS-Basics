console.log('SET Timeout & CLosure');

function x() {
  for (var i = 1; i <= 5; i++) {
    function close(i) {
      setTimeout(function () {
        console.log(i);
      }, i * 2000);
    }
    close(i);
  }
}

function y() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 2000);
  }
}

// x();

console.log('Start');

setTimeout(() => {
  console.log('s');
}, 1000);

console.log('v');
