// function Student(name, age) {
//   this.name = name;
//   this.age = age;
// }

// const student1 = new Student("Akash", 25);
// const student2 = new Student("IronMan", 45);
// console.log(student1.name);
// console.log(student2.name);

function Student(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;

  this.introduce = function () {
    console.log(
      `My Name is ${this.firstName} ${this.lastName}. My age is ${this.age}.`,
    );
  };
}

const student1 = new Student("Md", "Akash", 25);
const student2 = new Student("Md", "rahim", 45);

student1.introduce();
student2.introduce();
