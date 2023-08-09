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
  greet: function () {
    console.log(`Hello, my name is ${this.name}.`);
  }
};
console.log("Question Num 01");
person.greet();
//////////////

function Car(brand) {
  this.brand = brand;
  this.speed = 0;

  this.accelerate = function (value) {
    this.speed += value;
  };

  this.printSpeed = function () {
    console.log("Question Num 02");
    console.log(`Current speed of ${this.brand} car is : ${this.speed} km/h`);
  };
}

// Create a new Car instance
const myCar = new Car("Toyota");
console.log("Question Num 03");
// Use the methods of the Car instance
myCar.accelerate(50); // Accelerate by 50 km/h
myCar.printSpeed();
////////////////

const calculator = {
  value: 0,

  add: function (number) {
    this.value += number;
  },

  subtract: function (number) {
    this.value -= number;
  },

  multiply: function (number) {
    this.value *= number;
  },

  printValue: function () {
    console.log("Current value:", this.value);
  }
};
console.log("Question Num 04");
// Use the methods of the calculator object
calculator.add(5);       // Add 5
calculator.subtract(3);  // Subtract 3
calculator.multiply(4);  // Multiply by 4
calculator.printValue();
///////////////////////////

const book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  pages: 180,

  printInfo: function () {
    console.log(`Title: ${this.title}`);
    console.log(`Author: ${this.author}`);
    console.log(`Pages: ${this.pages}`);
  }
};
console.log("Question Num 05");
book.printInfo();
//////////////

const counter = {
  count: 0,

  increment: function () {
    this.count += 1;
  },

  reset: function () {
    this.count = 0;
  }
};
// Use the methods of the counter object
counter.increment(); // Increase count by 1
console.log("Question Num 06");
console.log(counter.count);

counter.increment(); // Increase count by 1 again
console.log(counter.count);

counter.reset(); // Reset count to 0
console.log(counter.count);
////////////////////////

const product = {
  name: "Smartphone",
  price: 500,
  discount: 0.1, // 10% discount

  calculateDiscountedPrice: function () {
    const discountedPrice = this.price * (1 - this.discount);
    return discountedPrice;
  }
};

// Call the calculateDiscountedPrice method and print the result
const discountedPrice = product.calculateDiscountedPrice();
console.log("Question Num 07");
console.log(`Discounted price of ${product.name}: $${discountedPrice}`);
////////////////

const game = {
  play: function () {
    console.log("Question Num 08");
    console.log("Playing the game!");
  }
};
// Call the play function using this keyword
game.play();
////////////////

//FOR OF LOOP://
const fruits = ["Apple", "Banana", "Orange", "Grapes", "Mango"];

for (const fruit of fruits) {
  console.log("Question Num 01");
  console.log(fruit);
}
////////////

const message = "Hello, world!";
console.log("Question Num 02");
for (const char of message) {
  console.log(char);
}
////////////////

const person3 = {
  name: "Alice",
  age: 30,
  country: "USA"
};
console.log("Question Num 03");
for (const property in person3) {
  if (person.hasOwnProperty(property)) {
    const value = person3[property];
    console.log(`${property}: ${value}`);
  }
}
////////////////

const colors = new Set(["Red", "Green", "Blue", "Yellow"]);
console.log("Question Num 04");
for (const color of colors) {
  console.log(color);
}
/////////////////

// Initialize an empty array
const numbers = [];

// Loop to populate the array with incrementing values of x
for (let x = 1; x <= 5; x++) {
  numbers.push(x);
}
console.log("Question Num 05");
// Output array contents using different methods
console.log("Array contents using console.log:");
console.log(numbers);

console.log("Array contents using for...of loop:");
for (const number of numbers) {
  console.log(number);
}

console.log("Array contents using forEach method:");
numbers.forEach(function (number) {
  console.log(number);
});

console.log("Array contents using join method:");
const joinedNumbers = numbers.join(", ");
console.log(joinedNumbers);
/////////////////////////

//FOR IN LOOP://
// Create a simple object with three items
const myObject = {
  name: "Alice",
  age: 30,
  country: "USA"
};
console.log("Question Num 01");
// Using the for...in loop to get properties' names and values from the object
console.log("Properties and values of the object:");
for (const property in myObject) {
  const value = myObject[property];
  console.log(`${property}: ${value}`);
}

// Create an array containing the same three items
const myArray = ["Alice", 30, "USA"];

// Using a for loop to output values from the array
console.log("Values from the array:");
for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}
/////////////////////////

const person4 = {
  name: "Alice",
  age: 30,
  country: "USA"
};
console.log("Question Num 02");
for (const property in person4) {
  console.log(property);
}
/////////////////////

const number = [10, 20, 30, 40, 50];
console.log("Question Num 03");
for (const index in number) {
  console.log(index);
}
//////////////////////

const messages = "Hello, world!";
console.log("Question Num 04");
for (const index in messages) {
  const character = messages[index];
  console.log(character);
}
//////////////////////

const scores = new Map([
  ["Alice", 95],
  ["Bob", 84],
  ["Carol", 78]
]);
console.log("Question Num 05");
for (const [name, score] of scores) {
  console.log(`${name}: ${score}`);
}
////////////////////

const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2022
};
console.log("Question Num 06");
for (const property in car) {
  const value = car[property];
  console.log(value);
}
///////////////

//ASYNC/AWAIT://
async function delayedGreeting(name) {
  await new Promise(resolve => setTimeout(resolve, 2000));
  console.log("Question Num 01");// Delay for 2 seconds
  console.log(`Hello, ${name}! Welcome.`);
}
// Call the delayedGreeting function
delayedGreeting("Alice");

//////////////

async function fetchData() {
  await new Promise(resolve => setTimeout(resolve, 3000)); // Simulate delay of 3 seconds

  const data = {
    id: 1,
    name: "Sample Data"
  };

  return data;
}
// Call the fetchData function
fetchData()
  .then(result => {
    console.log("Question Num 02");
    console.log("Received data:", result);
  })
  .catch(error => {
    console.error("Error:", error);
  });

//////////////////

async function fetchUsers() {
  await new Promise(resolve => setTimeout(resolve, 4000)); // Simulate delay of 4 seconds

  const userList = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Carol" }
  ];

  return userList;
}

// Call the fetchUsers function
fetchUsers()
  .then(users => {
    console.log("Question Num 03");
    console.log("Fetched users:", users);
  })
  .catch(error => {
    console.error("Error:", error);
  });
///////////////

// Call the fetchData function with a specific id
const idToFetch = 123; // Replace with the desired id
fetchData(idToFetch)
  .then(data => {
    console.log("Question Num 04");
    console.log("Fetched data:", data);
  })
  .catch(error => {
    console.error("Error:", error);
  });
//////////////////////

// let globalCounter = 0;

// function timeout(arg) {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       globalCounter += 1;
//       resolve({ counterValue: globalCounter, argumentValue: arg });
//     }, 1000); // 1 second timeout
//   });
// }
// console.log("Question Num 06");
// async function asyncFunction() {
//   const result = await timeout(globalCounter + 1);
//   console.log("Counter:", result.counterValue);
//   console.log("x Value:", result.argumentValue);
//   return result;
// }
// async function main() {
//   for (let i = 0; i < 10; i++) {
//     const asyncResult = await asyncFunction(i);
//     console.log("Result:", asyncResult);
//   }
// }
// main();

//////////////////////

//CLOSURES (WITH SCOPE & ITS BENEFITS’S)://
function counters() {
  let count1 = 0; // Counter variable

  // Inner function returned by the counter function
  function increment() {
    count1 += 1;
    console.log("Counter value:", count1);
  }

  return increment; // Return the inner function
}

// Create a counter function
const myCounter = counters();
console.log("Question Num 01");
// Use the returned inner function to increment and log counter value
myCounter();
myCounter();
myCounter();
//////////////////////

function createMultiplier(factor) {
  // Inner function returned by the createMultiplier function
  function multiplier(number) {
    return number * factor;
  }

  return multiplier; // Return the inner function
}

// Create a multiplier function with a factor of 2
const double = createMultiplier(2);
console.log("Question Num 02");
// Use the returned inner function to double a number
console.log(double(5)); // Output: 10
console.log(double(8)); // Output: 16

// Create a multiplier function with a factor of 3
const triple = createMultiplier(3);
console.log("Question Num 03");
// Use the returned inner function to triple a number
console.log(triple(4)); // Output: 12
console.log(triple(7)); // Output: 21

///////////////////////////

function secretMessage(message) {
  // Inner function returned by the secretMessage function
  function revealSecret(secret) {
    console.log(`Secret: ${secret}, Message: ${message}`);
  }

  return revealSecret; // Return the inner function
}

// Create a secretMessage function with a message
const secretFunction1 = secretMessage("This is a secret");

// Use the returned inner function to reveal the secret message
secretFunction1("Don't tell anyone"); // Output: Secret: Don't tell anyone, Message: This is a secret
secretFunction1("Keep it confidential"); // Output: Secret: Keep it confidential, Message: This is a secret

////////////////////////////

function secretMessage(message) {
  // Inner function returned by the secretMessage function
  function revealSecret(secret) {
    console.log(`Secret: ${secret}, Message: ${message}`);
  }

  return revealSecret; // Return the inner function
}

// Create a secretMessage function with a message
const secretFunction = secretMessage("This is a secret");
console.log("Question Num 04");
// Use the returned inner function to reveal the secret message
secretFunction("Don't tell anyone"); // Output: Secret: Don't tell anyone, Message: This is a secret
secretFunction("Keep it confidential"); // Output: Secret: Keep it confidential, Message: This is a secret

////////////////////////////

function calculate(num1, num2) {
  return {
    add: function() {
      return num1 + num2;
    },
    multiply: function() {
      return num1 * num2;
    }
  };
}

// Create a calculate function with numbers 5 and 3
const calculator1 = calculate(5, 3);
console.log("Question Num 05");
// Use the add and multiply methods
console.log("Add:", calculator1.add()); // Output: Add: 8
console.log("Multiply:", calculator1.multiply()); // Output: Multiply: 15








