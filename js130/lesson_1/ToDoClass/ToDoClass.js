
Menu
Courses
Forum (10+)
Events (2)
Sharing (7)
Videos
Resources
Exercises
Pages
Back
Our Pedagogy
Mastery-based Learning
Results & Outcomes
For Employers
Is This For Me
Common Questions
Community
Prep Courses
Love
Core Curriculum
Capstone
Archives
Chat Room
My Account
My Assessments
Sign Out

CoursesJS130 More JavaScript FoundationsIteration and the Todo Class8. Build a TodoList Class: Final Code
Build a TodoList Class: Final Code
We now have a Todo class that represents a todo item and a collection class called TodoList that represents a collection of Todo objects. Todo lists can perform a variety of actions that you'd expect from a collection class. Our implementation uses an array as the storage mechanism, but we can change it to another mechanism or data structure in the future without affecting any code that uses it, providing that code sticks to the TodoList interface (i.e., the methods we've provided).

We also included several methods that can take a callback function as an argument so that collaborators can provide iteration or selection criteria at method invocation time. That makes our class generic and robust.

Here's our final code:

todolist.jsCopy Code
// This class represents a todo item and its associated
// data: the todo title and a flag that shows whether the
// todo item is done.

class Todo {
  static DONE_MARKER = "X";
  static UNDONE_MARKER = " ";

  constructor(title) {
    this.title = title;
    this.done = false;
  }

  toString() {
    let marker = this.isDone() ? Todo.DONE_MARKER : Todo.UNDONE_MARKER;
    return `[${marker}] ${this.title}`;
  }

  markDone() {
    this.done = true;
  }

  markUndone() {
    this.done = false;
  }

  isDone() {
    return this.done;
  }

  getTitle() {
    return this.title;
  }
}

// This class represents a collection of Todo objects.
// You can perform typical collection-oriented actions
// on a TodoList object, including iteration and selection.

class TodoList {
  constructor(title) {
    this.title = title;
    this.todos = [];
  }

  add(todo) {
    if (!(todo instanceof Todo)) {
      throw new TypeError("can only add Todo objects");
    }

    this.todos.push(todo);
  }

  size() {
    return this.todos.length;
  }

  first() {
    return this.todos[0];
  }

  last() {
    return this.todos[this.size() - 1];
  }

  itemAt(index) {
    this._validateIndex(index);
    return this.todos[index];
  }

  markDoneAt(index) {
    this.itemAt(index).markDone();
  }

  markUndoneAt(index) {
    this.itemAt(index).markUndone();
  }

  isDone() {
    return this.todos.every(todo => todo.isDone());
  }

  shift() {
    return this.todos.shift();
  }

  pop() {
    return this.todos.pop();
  }

  removeAt(index) {
    this._validateIndex(index);
    return this.todos.splice(index, 1);
  }

  toString() {
    let title = `---- ${this.title} ----`;
    let list = this.todos.map(todo => todo.toString()).join("\n");
    return `${title}\n${list}`;
  }

  forEach(callback) {
    this.todos.forEach(todo => callback(todo));
  }

  filter(callback) {
    let newList = new TodoList(this.title);
    this.forEach(todo => {
      if (callback(todo)) {
        newList.add(todo);
      }
    });

    return newList;
  }

  findByTitle(title) {
    return this.filter(todo => todo.getTitle() === title).first();
  }

  allDone() {
    return this.filter(todo => todo.isDone());
  }

  allNotDone() {
    return this.filter(todo => !todo.isDone());
  }

  markDone(title) {
    let todo = this.findByTitle(title);
    if (todo !== undefined) {
      todo.markDone();
    }
  }

  markAllDone() {
    this.forEach(todo => todo.markDone());
  }

  markAllUndone() {
    this.forEach(todo => todo.markUndone());
  }

  toArray() {
    return this.todos.slice();
  }

  _validateIndex(index) { // _ in name indicates "private" method
    if (!(index in this.todos)) {
      throw new ReferenceError(`invalid index: ${index}`);
    }
  }
}
Don't delete this code. We'll use it later in this course.

 Build a TodoList Class: More Methods
