class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  introduce() {
    console.log(`My name is ${this.name} and my age is ${this.age}`);
  }
}

const student1 = new Student("Akash", 25);
student1.introduce();
