let person1={
    firstname: "Anisha",
    lastname: "Das"
};

let person2={
    firstname: "Geeta",
    lastname: "Singh"
};
console.log(person1.firstname);
let merge={person1,person2};
console.log(merge);

//Object destructuring
const student = {
    name: "Riya", 
    position: "First", 
    rollno: "24"
};  

//const a=student.name;
//const b=student.rollno;
//console.log(a,b);
const {name:x, position:y, rollno:z} = student;  
console.log(x); 
console.log(y);
console.log(z);
