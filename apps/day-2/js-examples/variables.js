// global
// function
let aa = 10;

// function f() {
// function scope
//   var a = 10;
// }

console.log('before aa:', aa);

// if(condition)
function someFn() {
  aa = 20;
  console.log('inside aa:', aa);
}

someFn();

console.log('after aa:', aa);
