// Vehicles
// class Vehicle {
//   constructor(year) {
//     this.year = year;
//   }
// }

// class Truck extends Vehicle {
//   constructor(year, bedType) {
//     super(year);
//     this.bedType = bedType;
//   }
// }

// class Car extends Vehicle {}

// let truck = new Truck(2003, 'short');
// console.log(truck.year); // 2003

// let car = new Car(2015);
// console.log(car.year); // 2015

// console.log(truck.year);
// console.log(truck.bedType);


// Walk the cat
const walkMixin = {
  walk: function() {
    return `Let's go for a walk`;
  }
};

class Cat {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello! My name is ${this.name}!`;
  }
}

Object.assign(Cat.prototype, walkMixin);

let kitty = new Cat("Sophie");
console.log(kitty.greet());
console.log(kitty.walk());


// Swimming
const swimMixin = {
  swim() {
    return `${this.name} is swimming.`;
  }
};

class Fish {
  constructor(name) {
    this.name = name;
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}

Object.assign(Fish.prototype, swimMixin);
Object.assign(Dog.prototype, swimMixin);

class Maltese extends Dog {}

let dog1 = new Maltese("Buddy");
let fish1 = new Fish("Nemo");

console.log(dog1.swim());
console.log(fish1.swim());


// Towable (part 1)
const towMixin = {
  tow() {
    return `I can tow a trailer`;
  }
};

class Vehicle {
  constructor(year) {
    this.year = year;
  }
}


class Truck extends Vehicle {}

Object.assign(Truck.prototype, towMixin);

class Car extends Vehicle {}

let truck = new Truck(2002);
console.log(truck.year);
console.log(truck.tow());

let car = new Car(2015);
console.log(car.year);