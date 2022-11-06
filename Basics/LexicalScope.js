//Lexical scope is the ability for a function scope to access variables from the
// parent scope.
//closures are defined as inner functions that have access to variables and parameters
// of outer function even after the outer function has returned.

var name = "Gita";
function displayName() {
    var age = 20;
    console.log(name);
    function displayAge() {
        console.log(age);
    }
    displayAge();
}
displayName();

var a = 10;
 function func(){ // outermost function
    var b = 20;
    console.log("a and b is accessible (outer):", a, b);
 function innerFunc(){ // innermost function
        var c = 30;
        console.log("a and b and c is accessible (innner):", a, b, c);
    }
    innerFunc();
    //console.log(c); //not accessible due to closure
    return;
}
func(); // invoke function func 
console.log("only a is accessible (global):", a);