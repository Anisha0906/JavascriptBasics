//A Higher-Order Function is a regular function that takes one or more functions
// as arguments and/or returns a function as a value from it.
/*var add = function(a){
    return function(b){
        return b + a;
    }
}
 //var sum = add(3)
 //console.log( sum(2))
 console.log(add(3)(4));*/

const numbers = [1, 2, 3, 4, 5];

function addOne(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i] + 1);
  }
}

addOne(numbers);