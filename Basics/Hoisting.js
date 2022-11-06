//Blocking: Blocking methods are executed synchronously
console.log("hi");
console.log("hello");
console.log("how are you");


//Non-Blocking: Non-blocking methods are executed asynchronously
console.log("hi");

setTimeout(() =>{
    console.log("hello");
},2000);

console.log("how are you");

//Hoisting: Here a function or a variable can be used before declaration
// using test before declaring
console.log(test);
var test;


//x is used before declaring
x=5;
console.log(x);
var x;//declaring x

var a;
console.log(a);
a = 7;

let b;
b = 8;
console.log(b);
