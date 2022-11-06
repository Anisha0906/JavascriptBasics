//callback is a function passed as an argument to another fuction
var demo=(a,callback) => {
console.log(a)
callback();
};

var demo1 = () => {
    console.log("hello");
};

demo(3,demo1);

function greet(name, callback) {
    console.log('Hi' + ' ' + name);
    callback();
}
// callback function
function callMe() {
    console.log('I am callback function');
}
// passing function as an argument
greet('Anisha', callMe);

function sayHi(){
    console.log("Hii...");
}
function add(a,b,c){
    console.log(a+b)
    c();
}
add(5,2,sayHi);

add(10,20,function(){
    console.log("Good morning");
})


