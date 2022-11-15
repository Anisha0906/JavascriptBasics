//length of array
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.length);

//Array item using index position
let first=fruits[0];
console.log(first);

let last=fruits[fruits.length-1];
console.log(last);

//loop in an array
fruits.forEach((data,index) => {
    console.log(data,index);
});

//Add item to end of an array
fruits.push("Kiwi");
console.log("Added fruit is",fruits);

//Remove item from end of array
let last1=fruits.pop();
console.log("removed fruit",fruits);

//Remove element from beginning
let first1=fruits.shift();
console.log("Removed first fruit",fruits);

//Add element in the beginning
let NewArrayLength=fruits.unshift("Papaya");
console.log("Added",fruits);

//index of an item
let a=fruits.indexOf("Orange");
console.log("index",a);

//splice method adds new items to an array
fruits.splice(1,0,"abc","xyz");
console.log(fruits);
fruits.splice(2,1,"a");
console.log(fruits);

//slice method slices out a piece of an array into a new array.
let numbers = [2, 3, 5, 7, 11, 13, 17];
// create another array by slicing numbers from index 3 to 5
let newArray = numbers.slice(3, 6);
console.log(newArray);

let languages = ["JavaScript", "Python", "C", "C++", "Java"];

// slicing the array (from start to end)
let new_arr = languages.slice();
console.log(new_arr);

// slicing from the third element
let new_arr1 = languages.slice(2);
console.log(new_arr1);

// slicing from the second element to fourth element
let new_arr2 = languages.slice(1, 4);
console.log(new_arr2);

//The concat method returns a new array by merging two or more values/arrays.
let primeNumbers = [2, 3, 5, 7]
let evenNumbers = [2, 4, 6, 8]
// join two arrays 
let joinedArrays = primeNumbers.concat(evenNumbers);
console.log(joinedArrays);

//joinmethod
let message=["Hii","Good","Morning"];
let joinedmessage=message.join(" ");
console.log(joinedmessage);
//toString converts an array to a string
let Lan=languages.toString();
console.log(Lan);




