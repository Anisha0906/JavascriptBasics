//Array destructuring
var colors = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"];  

//let color1=colors[0];
//let color2=colors[2];
  
// destructuring assignment  
var[color1, color2, ...color3] = colors;  
  
console.log(color1); 
console.log(color2); 
console.log(color3);   

//Default function parameter
function multiply(a, b) {
    return a * b;
}

let num1 = multiply(5);
console.log(num1);
let num2 = multiply(5, 8);
console.log(num2);

//const and let to replace var
const name = 'Mukul';
console.log(name); 
  
// Trying to reassign a const variable
//name = 'Rahul';
//console.log(name);

let name1 = 'Mukul';
console.log(name1);
  
name1 = 'Rahul';
console.log(name1); 

//template literals
const name2 = 'Anisha Das';
console.log(`My name is ${name2}`); 

//Arrow function
var myfun = () => {  
    console.log("It is an Arrow Function");     
   }; 
myfun();

// Spread operator
let arr = [1,2,3,-1];
console.log(Math.min(...arr));
var names=["Amit","Rita","Shyam","Ajay"];
function getNames(n1,n2,n3,n4){
    console.log(n1,n2,n3,n4)
}
//getNames(n1[0],n2[1],n3[2],n4[3])
getNames(...names)

// ES6 rest parameter
function fun(a,b,c,...input){
    console.log(input)
    return a+b+c
}
console.log(fun(1,2,3,4,5));
