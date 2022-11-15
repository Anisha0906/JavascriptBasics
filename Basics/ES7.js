//Exponentiation Operator
let base = 2
let exponent = 3
console.log('using Math.pow()',Math.pow(base,exponent))
console.log('using exponentiation operator',base**exponent)

//The Array.includes() method introduced in ES7 helps to check if an element is available in an array.
let marks = [50,60,70,80]
   //check if 50 is included in array
   if(marks.includes(50)){
      console.log('found element in array')
   }else{
      console.log('could not find element')
   }

   // check if 50 is found from index 1
   if(marks.includes(50,1)){ //search from index 1
      console.log('found element in array')
   }else{
      console.log('could not find element')
   }

   //create an object array
   let user1 = {name:'kannan'},
   user2 = {name:'varun'},
   user3={name:'prijin'}
   let users = [user1,user2]

   //check object is available in array
   console.log(users.includes(user1))
   console.log(users.includes(user3))