/*
Ancestors
Implement an ancestors method that returns the prototype chain (ancestors) of a calling object as an array of object names. Here's an example output:
*/

// name property added to make objects easier to identify
// const foo = {name: 'foo'};
// const bar = Object.create(foo);
// bar.name = 'bar';
// const baz = Object.create(bar);
// baz.name = 'baz';
// const qux = Object.create(baz);
// qux.name = 'qux';


// Object.prototype.ancestors = function ancestors() {
//   const ancestor = Object.getPrototypeOf(this);

//   if (ancestor.hasOwnProperty('name')) {
//     return [ancestor.name].concat(ancestor.ancestors());
//   }
//   return ['Object.prototype'];
// }


// console.log(qux.ancestors());  // returns ['baz', 'bar', 'foo', 'Object.prototype']
// console.log(baz.ancestors());  // returns ['bar', 'foo', 'Object.prototype']
// console.log(bar.ancestors());  // returns ['foo', 'Object.prototype']
// console.log(foo.ancestors());  // returns ['Object.prototype']


/*
Classical Object Creation (Pseudo-classical approach)
*/


// Constructors and Prototypes
function Person (firstName, lastName, age, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
}

Person.prototype.fullName = function () {
  return this.firstName + " " + this.lastName;
};

Person.prototype.communicate = function() {
  return 'Communicating';
};

Person.prototype.eat = function () {
  return 'Eating';
};

Person.prototype.sleep = function () {
  return 'Sleeping';
};

function Doctor (firstName, lastName, age, gender, specialization) {
  Person.call(this, firstName, lastName, age, gender);

  this.specialization = specialization;
}

Doctor.prototype = Object.create(Person.prototype);
Doctor.prototype.diagnose = function() {
  return 'Diagnosing';
};
Doctor.prototype.constructor = Doctor;

function Professor (firstName, lastName, age, gender, subject) {
  Person.call(this, firstName, lastName, age, gender);

  this.subject = subject;
}

Professor.prototype = Object.create(Person.prototype);
Professor.prototype.teach = function() {
  return 'Teaching';
};
Professor.prototype.constructor = Professor;

function Student (firstName, lastName, age, gender, degree) {
  Person.call(this, firstName, lastName, age, gender);

  this.degree = degree;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.study = function() {
  return 'studying';
};
Student.prototype.constructor = Student;

function GraduateStudent(firstName, lastName, age, gender, graduateDegree) {
  Student.call(this, firstName, lastName, age, gender);

  this.graduateDegree = graduateDegree;
}

GraduateStudent.prototype = Object.create(Student.prototype);
GraduateStudent.prototype.research = function () {
  return 'researching';
}
GraduateStudent.prototype.constructor = GraduateStudent;

const person = new Person('Foo', 'Bar', 21, 'male');
console.log(person instanceof Person);       // logs true
console.log(person instanceof Doctor);       // logs false
console.log(person instanceof Professor);    // logs false
console.log(person instanceof Student);      // logs false
person.eat();                                // logs 'Eating'
person.communicate();                        // logs 'Communicating'
person.sleep();                              // logs 'Sleeping'
console.log(person.fullName());              // logs 'Foo Bar'

const doctor = new Doctor('Bar', 'Qux', 21, 'female', 'Pediatrics');
console.log(doctor instanceof Person);       // logs true
console.log(doctor instanceof Doctor);       // logs true
console.log(doctor instanceof Professor);    // logs false
console.log(doctor instanceof Student);      // logs false
doctor.eat();                                // logs 'Eating'
doctor.communicate();                        // logs 'Communicating'
doctor.sleep();                              // logs 'Sleeping'
console.log(doctor.fullName());              // logs 'Bar Qux'
doctor.diagnose();                           // logs 'Diagnosing'

const professor = new Professor('Bar', 'Foo', 48, 'female', 'Law');
console.log(professor instanceof Person);    // logs true
console.log(professor instanceof Professor); // logs true
console.log(professor instanceof Doctor);    // logs false
console.log(professor instanceof Student);   // logs false
professor.eat();                             // logs 'Eating'
professor.communicate();                     // logs 'Communicating'
professor.sleep();                           // logs 'Sleeping'
console.log(professor.fullName());           // logs 'Bar Foo'
professor.teach();                           // logs 'Teaching'

const graduateStudent = new GraduateStudent('Qux', 'Bar', 21, 'non-binary', 'BS Industrial Engineering', 'MS Industrial Engineering');
console.log(graduateStudent instanceof Person);          // logs true
console.log(graduateStudent instanceof Student);         // logs true
console.log(graduateStudent instanceof GraduateStudent); // logs true
console.log(graduateStudent instanceof Professor);       // logs false
console.log(graduateStudent instanceof Doctor);          // logs false
graduateStudent.eat();                                   // logs 'Eating'
graduateStudent.communicate();                           // logs 'Communicating'
graduateStudent.sleep();                                 // logs 'Sleeping'
console.log(graduateStudent.fullName());                 // logs 'Qux Bar'
graduateStudent.study();                                 // logs 'Studying'
graduateStudent.research();                              // logs 'Researching'



// ES6 Classes
class Person {
  constructor(firstName, lastName, age, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
  }

  fullName() {
    return this.firstName + " " + this.lastName;
  }

  communication() {
    return 'Communicating';
  }

  eat() {
    return 'Eating';
  }


  sleep() {
    return 'Sleeping';
  }
}

class Doctor extends Person {
  constructor(firstName, lastName, age, gender, specialization) {
    super(firstName, lastName, age, gender);
    this.specialization = specialization;
  }

  diagnose() {
    return 'Diagnosing';
  }
}

class Professor extends Person {
  constructor(firstName, lastName, age, gender, subject) {
    super(firstName, lastName, age, gender);
    this.subject = subject;
  }

  teach() {
    return 'Teaching';
  };
}

class Student extends Person {
  constructor(firstName, lastName, age, gender, degree) {
    super(firstName, lastName, age, gender);
    this.degree = degree;
  }

  study() {
    return 'studying';
  };
}

class GraduateStudent extends Student {
  constructor(firstName, lastName, age, gender, degree, graduateDegree) {
    super(firstName, lastName, age, gender, degree)
    this.graduateDegree = graduateDegree;
  }

  research() {
    return 'researching';
  }
}