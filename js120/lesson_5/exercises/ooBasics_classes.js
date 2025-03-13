
//Name the constructor
console.log("Hello".constructor.name);
console.log([1,2,3].constructor.name);
console.log({name: 'Srdjan'}.constructor.name);


// Create the class
class Cat {
  constructor(name) {
    this.name = name;
  }

  rename(name) {
    this.name = name;
  }

  personalGreeting() {
    console.log(`Hello! My name is ${this.name}!`);
  }

  static genericGreeting() {
    console.log("Hello! I'm a cat!");
  }
}

// Create an instance
const kitty = new Cat('Sophie');
kitty.rename('Chloe');
console.log(kitty.name); // Chloe

//Hello, Chloe


// What are you
kitty.greet();

// Default Person
class Person {
  constructor(name = "John Doe") {
    this.name = name;
  }
}

let person1 = new Person();
let person2 = new Person("Pepe");

console.log(person1.name); // John Doe
console.log(person2.name); // Pepe

