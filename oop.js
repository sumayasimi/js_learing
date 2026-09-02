//without oop - object oriented program
// let studentFirstName = "John";
// let studentLastName = "Smith";
// let age = 20;

// function fullName(firstName, lastName){
//     console.log(studentFirstName + " " + studentLastName);
// }

// fullName();

//with oop

const student1 = {
  firstName: "Jhone",
  lastName: "Doe",
  age: 20,

  introduce: function () {
    //console.log("My name is", this.firstName + " " + this.lastName +".");
    console.log(
      `My Name is ${this.firstName} ${this.lastName}. My age is ${this.age}.`,
    );
  },
};
const student2 = {
  firstName: "Will",
  lastName: "Smith",
  age: 40,

  introduce: function () {
    console.log(
      `My Name is ${this.firstName} ${this.lastName}. My age is ${this.age}.`,
    );
  },
};

student2.introduce();
