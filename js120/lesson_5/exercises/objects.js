/* eslint-disable max-lines-per-function */
/*
1. Testing Object Equality
Write a function objectsEqual that accepts two object arguments and returns true or false depending on whether the objects have the same key/value pairs.
*/

// function objectsEqual(obj1, obj2) {
//   if (obj1 === obj2) return true;
//   if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;

//   for (let key in obj1) {
//     if (!obj2.hasOwnProperty(key) || obj2[key] !== obj1[key]) return false;
//   }

//   return true;
// }

// console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
// console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
// console.log(objectsEqual({a: 'foo', b: 'bar'}, {b: "bar", a: 'foo'}));  // true
// console.log(objectsEqual({}, {}));                                      // true
// console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false




/*
2. Student
Create an object factory for a student object. The student object should have the following methods and it should produce the expected results demonstrated in the sample code:


addCourse:
  Enrolls student in a course. A course is an object literal that has properties for its name and code.

  listCourses:
  Returns a list of the courses student has enrolled in.

  addNote:
  Adds a note property to a course. Takes a code and a note as an argument. If a note already exists, the note is appended to the existing one.

  updateNote:
  Updates a note for a course. Updating a note replaces the existing note with the new note.

viewNotes: Logs the notes for all the courses. Courses without notes are not displayed.
*/

// function createStudent(name, year) {
//   return {
//     name,
//     year,
//     courses: [],

//     info: function() {
//       console.log(`${this.name} is a ${year} year student`);
//     },

//     addCourse: function(course) {
//       this.courses.push(course);
//     },

//     listCourses: function() {
//       return this.courses;
//     },

//     addNote: function(courseCode, note) {
//       let course = this.courses.filter(course => course.code === courseCode)[0];
//       if (course && course.notes) course.notes += `; ${note}`;
//       else if (course) course.notes = note;
//     },

//     viewNotes: function() {
//       this.courses.forEach(course => {
//         if (course.notes) {
//           console.log(`${course.name}: ${course.notes}`);
//         }
//       });
//     },

//     updateNote: function(courseCode, newNote) {
//       let course = this.courses.filter(course => course.code === courseCode)[0];
//       if (course) course.notes = newNote;
//     }
//   };
// }

// let foo = createStudent('Foo', '1st');
// foo.info();
// // "Foo is a 1st year student"
// foo.listCourses();
// // [];
// foo.addCourse({ name: 'Math', code: 101 });
// foo.addCourse({ name: 'Advanced Math', code: 102 });
// foo.listCourses();
// // [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]
// foo.addNote(101, 'Fun course');
// foo.addNote(101, 'Remember to study for algebra');
// foo.viewNotes();
// // "Math: Fun course; Remember to study for algebra"
// foo.addNote(102, 'Difficult subject');
// foo.viewNotes();
// // "Math: Fun course; Remember to study for algebra"
// // "Advance Math: Difficult subject"
// foo.updateNote(101, 'Fun course');
// foo.viewNotes();
// // "Math: Fun course"
// // "Advanced Math: Difficult subject"



/*
3. School

Create a school object. The school object uses the same kind of student object as the previous exercise. It has methods that use and update information about the student. Be sure to check out the previous exercise for the other arguments that might be needed by the school object. Implement the following methods for the school object:

*/

// let paul = createStudent('Paul', '3rd');
// let mary = createStudent('Mary', '1st');
// let kim = createStudent('Kim', '2nd');

// function createSchool() {
//   return {
//     students: [],
//     validYears: ['1st', '2nd', '3rd', '4th', '5th'],

//     addStudent: function(student) {
//       if (this.validYears.includes(student.year)) this.students.push(student);
//       else console.log("Invalid Year");
//     },

//     enrollStudent: function(student, courseName, courseCode) {
//       student.addCourse({ name: courseName, code: courseCode });
//     },

//     addGrade: function(student, courseName, grade) {
//       const course = student.listCourses().filter(course => courseName === course.name)[0];

//       if (course) {
//         course.grade = grade;
//       }
//     },

//     getReportCard: function(student) {
//       student.listCourses().forEach(({ grade, name }) => {
//         if (grade) {
//           console.log(`${name}: ${String(grade)}`);
//         } else {
//           console.log(`${name}: In progress`);
//         }
//       });
//     },

//     courseReport: function(courseName) {
//       function getCourse(student, courseName) {
//         return student.listCourses().filter(({name}) => name === courseName)[0];
//       }

//       const courseStudents = this.students.map(student => {
//         const course = getCourse(student, courseName) || { grade: undefined };
//         return { name: student.name, grade: course.grade };
//       }).filter(({grade}) => grade);

//       if (courseStudents.length > 0) {
//         console.log(`=${courseName} Grades=`);
  
//       const average = courseStudents.reduce((total, {name, grade}) => {
//         console.log(`${name}: ${String(grade)}`);
//         return total + grade;
//       }, 0) / courseStudents.length;
  
//       console.log('---');
//       console.log(`Course Average: ${String(average)}`);
//       }
//     }
//   };
// }

// let school = createSchool();
// school.addStudent(paul);
// school.enrollStudent(paul, 'Math', 101);
// school.addGrade(paul, 'Math', 95);
// school.getReportCard(paul);