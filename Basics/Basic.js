//function
function Add()
{
    console.log("Addition")
}
Add();

//function with Parameter
function Addition(a,b,Fruit)
 {
    console.log("Sum is", a+b ,"Fruit name is",Fruit);
 }
 // calling the function
 Addition(3,5,"Apple");

 //Anonymus function
 //function expression
 let show=function () {
    console.log("hello world");
 };
 show();

 let x= (a1,a2) => {
    console.log(a1+a2);
    return true;
 }
x(2,3);

 //Arrow function(always anonymus)
var Greet = () => {
    console.log("Hello");
}
Greet();

//Arrow function with parameter
 let num = (a,b) => {
    console.log("Arrow function",a+" "+b);
 };
num(5,6);

//Arrow function with default parameter
let num1 = (a,b=9) => {
    console.log("Default parameter",a+" "+b);
 };
num1(3);

//let: Variables defined with let cannot be Redeclared.
//Variables defined with let must be Declared before use.
//Variables defined with let have Block Scope.
let y=1;
function letscope(){
    let y=2;
    console.log("Inside function",y);
    {
        let y=4;
        console.log("inside block",y);
    }
}
console.log("outside function",y);
letscope();

//var
//var: variables declared with var are in the function scope and can be redeclared
var a=5;
var a=9;
a=7;
function varscope() {
var a=2;
var a=1;

console.log("Inside function",a);
{
    var a=6;
    console.log("inside block",a);
}
}
console.log("outside function",a);
varscope();

//Const: const variable cannot be reassigned
const c=2;
function Cnst() {
    const c=5;
    console.log("Inside function",c);
{
    const c=6;
    console.log("inside block",c);
}
}
console.log("outside function",c);
Cnst();




