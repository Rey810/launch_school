
//Name the constructor
console.log("Hello".constructor.name);
console.log([1,2,3].constructor.name);
console.log({name: 'Srdjan'}.constructor.name);


// Create the class
class Cat {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello! My name is ${this.name}!`);
  }
}

// Create an instance
const kitty = new Cat('Sophie');

// What are you
kitty.greet();