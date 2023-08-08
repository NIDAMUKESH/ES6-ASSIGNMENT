class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const friend1 = new Person("John", "Doe");
const friend2 = new Person("Jane", "Smith");

console.log("Question Num 01");
console.log(`Hello, ${friend1.firstName} ${friend1.lastName}!`);
console.log(`Hello, ${friend2.firstName} ${friend2.lastName}!`);
///////////////////////

class Person1 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

// Create a new person instance
const person1 = new Person1("Alice", 30);

// Call the introduce method
console.log("Question Num 02");
console.log(person1.introduce());
///////////////////////

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return this.width * this.height;
    }

    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}

// Create a new rectangle instance
const rectangle1 = new Rectangle(5, 10);

console.log("Question Num 03");
// Calculate and output area and perimeter
console.log("Rectangle 1 - Area:", rectangle1.calculateArea());
console.log("Rectangle 1 - Perimeter:", rectangle1.calculatePerimeter());
////////////////////////////////

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    calculateDiameter() {
        return 2 * this.radius;
    }

    calculateCircumference() {
        return 2 * Math.PI * this.radius;
    }

    calculateArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}

// Create a new circle instance
const circle1 = new Circle(5);
console.log("Question Num 04");
// Calculate and output diameter, circumference, and area
console.log("Circle 1 - Diameter:", circle1.calculateDiameter());
console.log("Circle 1 - Circumference:", circle1.calculateCircumference());
console.log("Circle 1 - Area:", circle1.calculateArea());
///////////////////////

class Person2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

class Student extends Person2 {
    constructor(name, age, course) {
        super(name, age);
        this.course = course;
    }

    introduce() {
        return `${super.introduce()} I am a student studying ${this.course}.`;
    }
}

// Create a new student instance
const student1 = new Student("Alice", 20, "Computer Science");
console.log("Question Num 05");
// Call the introduce method on the student
console.log(student1.introduce());
/////////////////

class Rectangle1 {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return this.width * this.height;
    }

    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}

class Square extends Rectangle1 {
    constructor(side) {
        super(side, side); // Call the parent class constructor with the same side for width and height
        this.side = side;
    }

    calculateArea() {
        return Math.pow(this.side, 2); // Square's area is side squared
    }

    calculatePerimeter() {
        return 4 * this.side; // Square's perimeter is 4 times the side length
    }
}

// Create a new square instance
const square1 = new Square(5);
console.log("Question Num 06");
// Calculate and output area and perimeter of the square
console.log("Square 1 - Area:", square1.calculateArea()); // Output: Square 1 - Area: 25
console.log("Square 1 - Perimeter:", square1.calculatePerimeter()); // Output: Square 1 - Perimeter: 20
////////////////////////  
///hosting///

// function printValue() {
//     var x = 10;
// }

// printValue();
// console.log("Question Num 01");
// console.log(x); // This will result in an error
// /////////////////

// function printValue() {
//     let x = 10;
// }

// printValue();
// console.log("Question Num 02");
// console.log(x); // This will result in an error
// ///////////////

// function printValue() {
//     const x = 10;
// }
// console.log("Question Num 03");
// printValue();
// console.log(x); // This will result in an error
// //////////////////

// function printValue() {
//     console.log(undeclaredVariable); // This will result in an error
//   }
// console.log("Question Num 04");
//   printValue();
  ////////////////

  printMessage();

function printMessage() {
console.log("Question Num 05");
  console.log("Hello, world!");
}
///////////////
///The Keywords//

const person = {
    name: "John",
    greet: function() {
      console.log(`Hello, my name is ${this.name}.`);
    }
  };
console.log("Question Num 01");
  person.greet(); 
  //////////////

  function Car(brand) {
    this.brand = brand;
    this.speed = 0;
  
    this.accelerate = function(value) {
      this.speed += value;
    };
  
    this.printSpeed = function() {
      console.log(`Current speed of ${this.brand} car is : ${this.speed} km/h`);
    };
  }
  
  // Create a new Car instance
  const myCar = new Car("Toyota");
console.log("Question Num 02");
  // Use the methods of the Car instance
  myCar.accelerate(50); // Accelerate by 50 km/h
  myCar.printSpeed();   // Output: Current speed of Toyota car: 50 km/h
  ////////////////

  const calculator = {
    value: 0,
  
    add: function(number) {
      this.value += number;
    },
  
    subtract: function(number) {
      this.value -= number;
    },
  
    multiply: function(number) {
      this.value *= number;
    },
  
    printValue: function() {
      console.log("Current value:", this.value);
    }
  };
console.log("Question Num 03");
  // Use the methods of the calculator object
  calculator.add(5);       // Add 5
  calculator.subtract(3);  // Subtract 3
  calculator.multiply(4);  // Multiply by 4
  calculator.printValue(); // Output: Current value: 8
  