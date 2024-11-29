
// console.log("Hello world");
// console.warn("This is a warning!");
// console.error("This is an error.");

// document.getElementById("name").innerHTML = "Hello my name is Joe";
// document.getElementById("name").style = "color: red";
// console.log(document.getElementById("name").innerHTML);

// var first_name;
// console.log(typeof first_name);
// console.log(typeof 5);
// console.log(typeof 3.5);
// console.log(typeof NaN);
// console.log(typeof "str");
// console.log(typeof false);
// console.log(typeof []);
// console.log(typeof {});

// alert("This is a JavaScript alert!");

// // Variables
// var name1 = "Tim";
// let name2 = "Bob";
// const salesTaxRate = 0.75;
// console.log(name1, name2, salesTaxRate);

// // Some Arithmetic Operaters
// const x = 10;
// const y = 4;
// const z1 = x ** y;
// const z2 = x ** -y;
// const z3 = y % 0;
// const z4 = x / 0;
// console.log(z1, z2, z3, z4);

// // Assignment Operators and shortcut
// let num = 10;
// let num1 = 10;
// let num2 = 2;
// let num3;
// num -= num ** 2; // num = num - (num ** 2);
// num1 **= 2; // num1 = num1 ** 2;
// num2 /= 10; // num2 = num2 / 10;
// num3 = 2 % 10;
// console.log(num, num1, num2, num3);

// // Type Conversions - Number(), parseInt(), toString(), String()
// const x = "5";
// const y = 10;
// const result = x + y;
// console.log(result);
// const result1 = Number(x) + y;
// console.log(result1);

// // ASCII Code number retrieval.
// const string1 = "hello";
// console.log(string1.charCodeAt(0));
// const string2 = "0123456789"; // 48 to 57
// console.log(string2.charCodeAt(5));

// // If Statement
// // For prompt, use the browser and console for display.
// const age = prompt("Please enter your age: ");
// console.log(age);

// if (age >= 12) {
//   alert("You can ride the rollercoaster.");
// } else {
//   console.log("You can NOT dirve");
// }

// // Nested If statement e.g. for surveys
// const countryEntered = prompt("Please enter your country of residence: ");
// const country = countryEntered.toUpperCase();

// if (country == "USA" || country == "UNITED STATES" 
//   || country == "UNITED STATES OF AMERICA" || country == "U.S.A") {
//   const age = prompt("Please enter your age: ");  
//   if (age >= 18) {
//     // alert("You're old enough to continue the survey.");
//     const color = prompt("Please enter your fav color: ");
//     const text = document.getElementById("color");
//     text.innerHTML = color;
//     text.style = "color: " + color; // Apply CSS color property. 
//   } else {
//     alert("Thanks for participating, you're not old enough to continue.")
//   }
// } else {
//   alert("Thanks for participating, we do not need any more information.");
// }

// // Switch statements
// const color = prompt("Please enter your fav color: ");

// switch (color) {
//   case "red":
//     alert("You entered Red");
//     break;
//   case "blue":
//     alert("You enterd Blue");
//     break;
//   default:
//     alert("We do not recognize that color. Please enter valid color next time.");
//     break;
// }

// // Arrays
// const array1 = [10, 20, "hello", 30];
// console.log(array1.length);
// array1[array1.length + 2] = 100; // This create 2 extra items and then adds 100
// console.log(array1);
// console.log("Number of array objects: " + array1.length);
// const array2 = new Array(10, 20, 40);
// console.log(array2);
// console.log("Number of array objects: " + array2.length);

// const array3 = [];
// const name3 = prompt("Enter your name: ");
// const age = prompt("Enter your age: ");
// const haircolor = prompt("Enter your hair color: ");
// if (name3 !== "") array3.push(name3);
// if (age !== "") array3.push(age);
// if (haircolor !== "") array3.push(haircolor);
// alert(array3);
// // Nested arrays
// const array3 = [[1, 2, 3],[4, 5, 6]] //2-dimensional array is 2 levels of nesting
// console.log(array3[1][2]) // Second array index 2 outputs 6

// const array4 = [1, 2, 3];
// const stringofArray = array4.toString();
// console.log(stringofArray);
// // Methods: push(), pop(), shift(), unshift(), sort()

// // Strings
// console.log("\""); // Includes a double quote.
// console.log("\\"); // Includes a backslash.
// console.log("hello\nworld"); // New line character.
// console.log("hello\n\nworld"); // 2 new lines.
// console.log("hello\n\tworld"); // New and a tab.

// // Using backtick (`) can evaluate expressions and output strings.
// // This is similar to the formatted string in Python.
// const name4 = "Lamin";
// const string1 = `Hello ${name4} world!`; 
// const string2 = `Hello ${6 + 7} world!`; 
// console.log(string1, string2);
// console.log(string1[0]); // Outputs character (H) at the first index of the string
// const string3 = "hello world";
// const string4 = string3.slice(6); // Output from index 6 to the end of the string.
// console.log(string4);
// const string5 = "hello world";
// const string6 = string5.replace("l", "!"); // replaceAll() replaces all instances.
// console.log(string6);


// // For loops
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }
// for (let i = 10; i <= 100; i += 10) {
//   console.log(i);
// }

// // For loop thru an array and display text paragraph tags.
// const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
// let text = "";
// for (let i = 0; i < cars.length; i++) {
//   text += cars[i] + "<br>";
// }
// document.getElementById("demo1").innerHTML = text;

// // Populates an array with even number from 0 to 20.
// const evenNumberArray = [];
// for (let i = 0; i <= 20; i++) {
//   if (i % 2 === 0) evenNumberArray.push(i);
// }
// console.log(evenNumberArray);

// // Should populate an array with even number from 0 to 20.
// // However, we omit 0 and limit length to 5 loops.
// const evenNumberArray1 = [];
// for (let i = 0; i <= 20; i++) {
//   if (i % 2 == 0 && i !== 0) evenNumberArray1.push(i);
//   if (evenNumberArray1.length >= 5) break;
// }
// console.log(evenNumberArray1);

// // Skip if number is divisible by 3
// const evenNumberArray2 = [];
// for (let i = 0; i <= 20; i++) {
//   if (i % 3 === 0 && i !== 0) continue;
//   if (i % 2 == 0 && i !== 0) evenNumberArray2.push(i);
// }
// console.log(evenNumberArray2);

// // The code block below adds string listing of li in a <ul> tag in the html.
// const numberElements = Number(prompt("Enter a number between 1 and 10: "));
// if (numberElements >= 1 && numberElements <= 10) {
//   const list = document.getElementById("list");
//   for (let i = 1; i <= numberElements; i++){
//     const li = document.createElement("li"); // Creates an li node
//     li.appendChild(document.createTextNode(i.toString()));
//     list.appendChild(li);
//   }
// } else {
//   alert("That is not a valid input.");
// }

// // Track number of char before we encounter a searched char in a string 
// const string7 = prompt("Enter a string of characters: ");
// const target = "!";

// for (let i = 0; i < string7.length; i++) {
//   const char = string7[i];
//   if (char === target) {
//     alert(`We found the ${target} in ${i + 1} characters.`);
//     break; // For the first found target. Remove break for every target found.
//   } else {
//     alert(`We did not find the ${target} in ${string7.length} characters you entered.`);
//     break;
//   }
// }

// // "of" keyword for iterable objects like arrays, objects, and strings.
// const string8 = ['one', 'two', 'three', 'four', 5];
// for (let i = 0; i < string8.length; i++) {
//   const str = string8[i];
//   console.log(str);
// }
// for (const str of string8) {
//   console.log(str);
// }
// // Gets both index and value with entries().
// for (const [i, str] of string8.entries()) {
//   console.log(i, str);
// }
// const [str1, str2, str3] = string8;
// console.log(str1, str2, str3);

// const string9 = "Hello World!";
// for (const char of string9) {
//   console.log(char);
// }

// // Create a matrix [[1, 2, 3], [1, 2, 3], [1, 2, 3]]
// const matrix = [];
// for (let i = 0; i < 3; i++) {
//   const numbers = [];
//   for (let j = 0; j < 3; j++) {
//     numbers.push(j + 1);
//   }
//   matrix.push(numbers);
// }
// console.log(matrix);

// // Create a matrix [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// const matrix1 = [];
// for (let i = 0; i < 3; i++) {
//   const numbers1 = [];

//   for (let j = i * 3; j < i * 3 + 3; j++) {
//     numbers1.push(j + 1);
//   }
//   matrix1.push(numbers1);
// }
// console.log(matrix1);

// // Triple nested matrix. Matrix with 2 arrays, inside the 2 arrays, 3 arrays in each.
// const matrix2 = [];
// for (let i = 0; i < 2; i++) { 
//   const array5 = [];
//   for (let j = 0; j < 3; j++) {
//     const numbers2 = [];
    
//     for (let k = 0; k < 2; k++) {
//       numbers2.push(k); // 2 values inside
//     }
//     array5.push(numbers2);
//   }
//   matrix2.push(array5);
// }
// console.log(matrix2);

// // Triple nested matrix. Second array starts at 7, so start = i * 6 + j * 2 + 1;
// const matrix3 = [];
// for (let i = 0; i < 2; i++) { 
//   const array6 = [];

//   for (let j = 0; j < 3; j++) {
//     const numbers2 = [];
//     const  start = i * 6 + j * 2;

//     for (let k = start; k < start + 2; k++) {
//       numbers2.push(k + 1);
//     }
//     array6.push(numbers2);
//   }
//   matrix3.push(array6);
// }
// console.log(matrix3);

// // "in" keyword statement loops through the properties of an object, array.
// const person = {fname: "John", lname: "Doe", age: 25};
// let text = "";
// for (let x in person) {
//   text += person[x] + " ";
// }
// console.log(text);

// // forEach() methods call a function (a callback function) once for each array element.
// // Note that the function takes 3 arguments myFunction(value, index, array).
// const numbers = [45, 4, 9, 16, 25];
// let text = "";
// numbers.forEach(myFunction);

// function myFunction(value) {
//   text += value + "<br>";
// }
// document.getElementById("demo2").innerHTML = text;


// // While and Do While loops
// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }
// let idx = 0;
// do {0
//   console.log(idx);
//   idx++;
// } while (idx < 10);

// let number = Number(prompt("Enter a number between 1 and 10: "));
// while (!(number >= 1 && number <= 10)) {
//   number = Number(prompt("Enter a number between 1 and 10: "));  
// }
// console.log(number);

// // More efficient way of the one above.
// while (true) {
//   const number1 = Number(prompt("Enter a number between 1 and 10: "));
//   if (number1 >= 1 && number1 <= 10) {
//     console.log(number1);
//     break;
//   }
// }

// let number2;
// do {
//   number2 = Number(prompt("Enter a number between 1 and 10: "));
// } while (!(number2 >= 1 && number2 <= 10));
// console.log(number2);


// // Sets {} (outputs only unique elements), add(), has(); delete(), size
// const mySet = new Set(); // Declaring an empty set
// const mySet1 = new Set([1, 2, 3, 4, 4, 3, 2, 1]);
// console.log(mySet1);

// mySet1.add(-1); // Adding an element to the set.
// mySet1.delete(4); // Removing an element from the set.
// console.log(mySet1);

// // You cannot access the index of a set but you 
// // can iterate thru the values with a loop
// const mySet2 = new Set([1, 2, 3, 4, 4, 3, 2, 1]);
// for (const elements of mySet2) {
// 	console.log(elements);
// }

// // Using for loops to check for duplicates in an array 
// // (not efficient if we have a million values).
// const array7 = [1, 3, 4, 5, 2, 1, 31, 2];
// for (const [idx, value] of array7.entries()) {
//   for (const value2 of array7.slice(idx + 1)) {
//     if (value === value2) {
//       console.log("Found duplicate of", value);
//       break;   
//     }
//   }
// }
// console.log(array7.toString());

// // A more efficient way is to use a set
// const array7 = [1, 3, 4, 5, 2, 1, 31, 2];
// const numbers3 = new Set();

// for (const value of array7) {
//   if (numbers3.has(value)) {
//     console.log("Found duplicate of", value);
//   }
//   numbers3.add(value);
// }
// console.log(numbers3);
// console.log(numbers3.size);


// // Maps
// const myMap = new Map();
// myMap.set("a", 3);
// myMap.set("b", 2);
// myMap.set("a", 4);
// console.log(myMap);

// // Search for the frequency of values using an array. Not efficient.
// const string100 = "Hello world, my name is Lamin";
// const freq1 = [];

// for (const char1 of string100) {
//   let found = false;
//   for (const [idx, pair] of freq1.entries()) {
//     const [key, value] = pair;
//     if (key === char1) {
//       freq1[idx] = [char1, value + 1];
//       found = true;
//       break;
//     } 
//   }
//   if (!found) freq1.push([char1, 1]);
// }
// console.log(freq1);

// // Search for the frequency of values using a map. More efficient.
// const string10 = "Hello world, my name is Lamin";
// const freq = new Map();

// for (const char of string10) {
//   if (freq.has(char)) {
//     freq.set(char, freq.get(char) + 1);
//   } else {
//     freq.set(char, 1); // If freq doesn't have a char, indicate 1
//   }
// }
// console.log(freq);
// console.log(freq.get(" ")); // Getting the frequency of a particular character.


// // Objects in JavaScript (JSON JavaScript Object Notation)
// const myObject = {
//   name: "Lamin",
// };
// console.log(myObject);
// console.log(myObject.name); // Access the value with property key.
// console.log(myObject["name"]); // Access the value using string representation.
// myObject.name = "Buba"; // Reassign a value of the property.
// myObject.age = 25; // Add a property and its value.
// console.log(myObject);

// const person = {
//   name: "Lamin",
//   children: [{name: "joe"}, {name: "sally"}],
// };
// console.log(person);
// console.log(person.children[0]);
// console.log(person.children[1].name);

// // Note we use in for objects and of for arrays or use Object Constructor.
// for (const property in person) {
//   console.log(person[property]); // property is a variable
// }
// for (const value of Object.values(person)) {
//   console.log(value); // property is a variable
// }
// // List property and its value in an array.
// for (const [property, value] of Object.entries(person)) {
//   console.log(property, value); // property is a variable
// }

// // Use a spread operator (3 dots) to copy immutable objects  
// // and copy references of mutable types such as arrays
// const object1 = { name: "Lamin", };
// const object2 = { ...object1}; // Copy object 1 to object2.
// console.log(object1);
// console.log(object2);

// const object3 = { name: "Lamin", };
// const object4 = { ...object3 };
// object4.name = "Bob";
// console.log(object3);
// console.log(object4);

// const object5 = { ...object3, age: 2 };
// console.log(object5);


// // Error handling - Error is an object
// // finally block will run either way and it's optional. It is used for cleanup
// const x = 22;

// try {
//   x.toUpperCase();
// } catch (err) {
//   console.log(err.message, err.name);
// }

// try {
//   x.toUpperCase();
// } catch (err) {
//   console.log(err.message, err.name);
// } finally {
//   // Used for cleanup and optional
// }

// // The throw keyword is used to raise your own error to the user.
// // throw "This is an error"; // err is now a string not an object.
// // throw {NumberError: "This is an error"}; // This is an object with err.NumberError.
// // throw Error("This is an error"); // String as message and name as Error.
// try {
//   console.log("Try");
//   throw Error("This is an error"); // Error object
// } catch (err) {
//   console.log(err.message, err.name);
// } finally {
//   // Used for cleanup
//   console.log("finally");
// }


// // Functions
// // Functions are reusable block of code we can call multiple times.
// // Functions can be called before or after the declaration.
// // Parameters can be passed in and the values are the arguments.
// function add(x, y) {
//   console.log(x + y);
// }
// add(10, 8);
// add(23, 12);

// // Optional parameter num with a default value of 2.
// function math(a1, a2, num = 2) {
//   return a1 * a2 * num;
// }
// const result1 = math(10, 20); // Same as console.log(math(10, 20));
// const result2 = math(-10, 10, -1);
// console.log(result1); // Outputs 400 for (10 * 20 * 2)
// console.log(result2); // Outputs 100 for (-10 * 10 * -1)

// // Function returns multiple values with the use of square brackets.
// function math2(a1, a2, num = 2) {
//   return [a1 ** 2, a2 ** 2];
// }
// const result3 = math2(10, 20);
// const result4 = math2(-10, 10, -1);
// console.log(result3); // Outputs an array: [ 100, 400 ] for (10 * 20 * 2)
// console.log(result4); // Outputs an array: [ 100, 100 ] for (-10 * 10 * -1)

// const [result5, result_6] = math2(10, 20); // Note the array assignment
// console.log(result5, result_6); // Outputs individual values: 100 400

// // Remove characters from an array of strings.
// function removeAllChars(arrayOfStrings, charactersToRemove) {
//   const newArray = [];

//   if (charactersToRemove.length == 0) return; // If false return is not encountered

//   for (const str of arrayOfStrings) {
//     let newStr = "";
//     for (const char of str) {
//       if (charactersToRemove.includes(char)) {
//         continue; // Skip the rest of the for loop and check the next char.
//       }
//       newStr += char;
//     }
//     newArray.push(newStr);
//   }
//   return newArray;
// }
// const result_7 = removeAllChars(["hello world", "1234", "i am the best", "yes"], ["e", "2", "t"]);
// console.log(result_7) // Outputs [ 'hllo world', '134', 'i am h bs', 'ys' ]

// // Events (e) e is an event for an html element & This
// // onclick, onchange(changes appear when mouse goes of focus)
// function enterUsername() {
//   const username = document.getElementById("username").value;
//   document.getElementById("text").innerHTML = username;
// }

// // this keyword acts on the object and its properties when the function is referenced.
// const person = {
//   firstName: "Lamin",
//   lastName: "Sanyang",
//   getName: function () {console.log(this.firstName + " " + this.lastName);}
// }
// person.getName();

// // Reference(an alias for the function name) functions without the parenthesis.
// function test() {
//   console.log("Testing");
// }
// const referenceTest = test;
// referenceTest();

// // Arrow Functions
// // Arrow function has "this" keyword bound to where its defined not where it's called.
// // With regular function, "this" keyword accesses wherever it's called.
// const func = (x, y) => {
//   return x + y; 
// }
// const result6 = func(8, 2);
// const func1 = (x, y) => x + y; // Short-hand form without curly braces and return keyword.
// const result7 = func1(3, 2);
// console.log(result6, result7);
// // Arrow functions can return an object with short-hand form.
// const func2 = (x, y) => ({x: x, y: y});
// const result_8 = func2(4, 2);
// console.log(result_8);

// function getName2() {
//   return this.firstName + " " + this.lastName;
// }

// const person2 = {
//   firstName: "Lamin",
//   lastName: "Sanyang",
//   getName2: getName2,
// }
// const personName1 = person2.getName2(); // "this person2" is calling the function.
// console.log(personName1);
// const personName2 = getName2(); // "this" is accessing the global context.
// console.log(personName2); // Outputs: undefined undefined.

// const getName3 = () => { 
//   return this.firstName + " " + this.lastName;
// }

// const person3 = {
//   firstName: "Joe",
//   lastName: "Smith",
//   getName3: getName3,
// }
// const personName3 = person3.getName3(); // "this" is accessing the global context.
// const personName4 = getName3(); // "this" is also accessing the global context.
// console.log(personName3, personName4); // Outputs: undefined undefined undefined undefined.


// // Map, Filter, & Reduce functions
// // Map function - Maps to individual elements in the array.
// const array8 = [1, 2, 3, 4, 5, 6];
// // map callback function to square values and return a new array.
// const squares = array8.map((x) => x ** 2);
// console.log(squares); // Outputs: [1, 4, 9, 16, 25, 36]
// // Using a regular function to map the values.
// function map(array8, func) {
//   const newArray2 = [];
//   for (const value of array8) {
//     const newValue = func(value);
//     newArray2.push(newValue);
//   }
//   return newArray2;
// }
// const result8 = map(array8, (x) => x ** 2);
// console.log(result8); // Outputs: [1, 4, 9, 16, 25, 36]

// // Filter function - Values are kept in an array only if they pass the filter.
// const array9 = [1, 2, 3, 4, 5, 6];
// const filterArray = array9.filter((value) => value % 2 === 0);
// console.log(filterArray); // Outputs: [2, 4, 6]
// // Using a regular function to filter the values.
// function filter(array9, func) {
//   const newArray3 = [];
//   for (const value of array9) {
//     if (func(value)) {
//     newArray3.push(value);
//     }
//   }
//   return newArray3;
// }
// const result9 = filter(array9, (x) => x % 2 === 0);
// console.log(result9); // Outputs: [2, 4, 6]

// // Reduce function - Reduces an iterable object into a single value.
// const array10 = [1, 2, 3, 4, 5, 6];
// // prev starts at 0 and current is first element.
// const sum = array10.reduce((prev, current) => prev + current); 
// console.log(sum); // Outputs: 21
// // Using a regular function to reduce the values to a sum.
// function reduce(array10, func) {
//   let currentResult = 0;
//   for (const num of array10) {
//     currentResult = func(currentResult, num);
//   }
//   return currentResult;
// }
// // prev starts at 0 and next is first element.
// const result10 = reduce(array10, (prev, next) => prev - next); 
// console.log(result10); // Outputs: -21


// // Scope
// Global scope is any variable defined outside of a block or function.
// Variables defined in functions are limited in scope to that function.
// “let” and “const” is for current block and a “var” is for the most current function.


// // Mutability
// // Immutable Types: boolean, number, string, undefined, null, const
// let x = 10;
// const y = x; // Since number is immutable, y is copy of x which is 10.
// x = 20;
// console.log(x, y); // Outputs: 20 10

// // Mutable Types: array,object, set, map
// let arrayX = [1, 2, 3, 4, 5]; // arrayX -> ref -> [1, 2, 3, 4, 5]
// let arrayY = arrayX; // arrayY -> ref -> storing a reference (alias)
// console.log(arrayX, arrayY); // Same output
// // Use the spread operator to copy let arrayY = [...arrayX] however if a 
// // mutable type is inside another mutable type, the spread operator only 
// // applies to the outer mutable type. The inside mutable type can be 
// // altered with assignment even though the spread operator is been used.
// let arrayY1 = [...arrayX]; // Making a copy of arrayX (alias)
// arrayX[0] = 100;
// console.log(arrayX, arrayY1); // Different outputs

// const array11 = [1, 2, 3, 4];
// // Using a function to modify an array reference.
// function modifyArray(x) {
//   x[0] = 100;
// }
// console.log(array11);
// modifyArray(array11); // Function called to change the reference.
// console.log(array11);


// // Math functions
// // Methods: round, floor, ceil, min, max, abs, log, log2 and more
// const num = 2.5;
// const roundedNum = Math.round(num); // round(rounds to the nearest integer)
// const roundedNum = Math.floor(num); // floor(always rounds down even 2.9)
// const roundedNum = Math.ceil(num); // ceil(always rounds up even 2.2)
// console.log(roundedNum);

// // Rounding to the 1 decimal place (multipy by 10, round, then divide by 10)
// const num1 = 2.55;
// const roundedNum1 = Math.round(num1 * 10) / 10;
// console.log(roundedNum1);

// // Rounding to the 3 decimal places (multipy by 1000, round, then divide 1000)
// const num2 = 2.557262;
// const roundedNum2 = Math.round(num2 * 1000) / 1000;
// console.log(roundedNum2);

// // min and max values for arrays use the spread operator to pass elements as
// // separate arguments to the min and max functions.
// const x = 10;
// const y = 20;
// const array12 = [1, 3, 4, 5, 2, 1, 2];

// const minValue = Math.min(x, y, 30, -10, 9, 89);
// console.log(minValue);
// const maxValue = Math.max(x, y, 30, -10, 9, 89);
// console.log(maxValue);
// const arrayMinValue = Math.min(...array12); // spread operator to unpack the array
// console.log(arrayMinValue);


// // Random numbers - random()
// // Generates a floating-point number between 0 and 1

// const num3 = Math.random();
// console.log(num3);

// // To generate a number between 1 and 10. Multiply by 10 to move the decimal point, then round.
// const num4 = Math.round(Math.random() * 10);
// console.log(num4);
// // To generate a number between 10 and 20. Add 10 or any minimum number as the start point, 
// // then multiply by 10 to move the decimal point, then round.
// const startValue = 10;
// const num5 = startValue + Math.round(Math.random() * 10);
// console.log(num5);

// // Using a function to generate between a minimum and maximum value.
// // Note: In a function that generate random values, the round() function includes 
// // the max value, to exclude the max value use floor() function instead.
// function randomNum(min, max) {
//   return min + Math.round(Math.random() * (max - min));
// }
// const num6 = randomNum(20, 80);
// console.log("Random number between 20 and 80: ", num6);
// let num7 = randomNum(1, 100);
// console.log("Random number between 1 and 100: ", num7);

// // Ask the user to guess a random number that a function generated.
// function randomNum(min, max) {
//   return min + Math.round(Math.random() * (max - min));
// }
// let num8 = randomNum(1, 100);
// numGuesses = 0; // current guesses
// // Function to generate a random number, reset guesses to 0, and the indicator. 
// function reset() {
//   num7 = randomNum(1, 100);
//   numGuesses = 0;
// }

// function makeGuess() {
//   const guessInput = document.getElementById("guess");
//   const guess = Number(guessInput.value);
//   guessInput.value = ""; // Clearing the input field
//   const feedback = document.getElementById("feedback");

//   numGuesses++;
//   document.getElementById("num-guesses").innerHTML = numGuesses;

//   if (guess === num8) {
//     feedback.innerHTML = "You guessed it.";    
//     guessInput.value = guess.toString(); // Keep the guessed value.
//     reset();
//   } else if (guess > num8){
//     feedback.innerHTML = "It is lower.";
//   } else {
//     feedback.innerHTML = "It is higher.";
//   }
// }


// // Sorting
// // Remember sort() by default rearranges the elements in place based on 
// // their string ASCII character representations.
// // So single digit values from 0 to 9 are sorted correctly but double digits
// // or more are sorted by the first number, then second number, and so on.
// const num9 = [1, 2, 3, 4, 2, 5, 2, 1, 2, 6];
// const sortedNum9 = num9.sort();
// console.log(sortedNum9);
// // To always sort correctly regardless of number of digits, 
// // use a custom sort callback arrow function.
// const num10 = [1, 2, 34, 4, 12, 50, 2, 1, 2, 6];
// const sortedNum10 = num10.sort((first, second) => first - second); // Ascending order
// //const sortedNum11 = num10.sort((first, second) => second - first); // Descending order
// console.log(sortedNum10);

// // Sorting objects in an array.
// const objs = [
//   { year: 2012, make: "Ford"},
//   { year: 2017, make: "Porsche"},
//   { year: 1999, make: "Volvo"},
//   { year: 2022, make: "Chevy"}
// ];
// const sortedObjs = objs.sort((a, b) => a.year - b.year);
// console.log(sortedObjs)

// // If vehicle make have the same year, order in make like this:
// const objs1 = [
//   { year: 2012, make: "Ford"},
//   { year: 2017, make: "Porsche"},
//   { year: 1999, make: "Volvo"},
//   { year: 2022, make: "Chevy"},
//   { year: 2017, make: "BMW"},
//   { year: 2012, make: "Toyota"},
// ];
// const sortedObjs1 = objs1.sort((a, b) => {
//   const diffInYear = b.year - a.year; // Descending year
//   if (diffInYear === 0) {
//     if (a.make < b.make) {
//       return 1;
//     } else if (a.make > b.make) {
//       return -1;
//     } else {
//       return 0;
//     }
//   }
//   return diffInYear;
// });
// console.log(sortedObjs1);
// // To reverse in alphabetical order use the spread operator with the reverse() function
// // The spread operator makes a copy of a mutable object like an array.
// const reverseSortedObjs = [...sortedObjs1].reverse(); // Ascending year
// console.log(reverseSortedObjs);

 
// // Prototypes
// // Every single object in JS has a prototype.
// const obj = {
//   name: "Lamin",
//   sayHi: function () {
//     console.log("hi");
//   },
//   toString() {
//     return this.name;
//   }, 
// };

// console.log(obj.toString()); // if doesn't exist, object Object is displayed
// console.log(obj.__proto__);
// console.log(Object.getPrototypeOf(obj));

// const personPrototype = {
//   greet() { console.log("hello");},
// };
// // Create an object for personPrototype as its prototype.
// // Every prototype is an actual object.
// const lamin = Object.create(personPrototype); 
// lamin.greet()


// // Class & Objects
// // Class is a blueprint for creating an object.
// class Person {
//   name; // properties
//   age;

//   constructor(name, age) {
//     this.name = name
//     this.age = age
//   }

//   sayHi() {
//     console.log(`Hello my name is ${this.name} and I am ${this.age} years old.`);
//   }
// }

// const person1 = new Person("Lamin", 25); // An instance of an object
// const person2 = new Person("Joe", 20);

// console.log(person1, person2);
// person1.sayHi();
// person2.sayHi();

// // Attributes and Methods
// class Teacher {
//   name;
//   age;
//   #salary; // Encapsulation for private property to hide.

//   constructor(name, age, salary) {
//     this.name = name;
//     this.age = age;
//     this.#salary = salary;
//     // console.log(this.#getSalary());
//   }

//   // Methods for get & set
//   getSalary() {
//     return this.#salary;
//   }

//   // // Private method that can only be accessed within the class
//   // #getSalary() {
//   //   return this.#salary;
//   // }

//   setSalary(newSalary) {
//     if (newSalary <= 0) {
//       throw Error("Invalid salary, must be above 0.");
//     }
//     this.#salary = newSalary;
//   }
// }

// // const teacher1 = new Teacher("Joe", 30, 65000); // Toggle for just private #getSalary().
// const teacher1 = new Teacher("Joe", 30, 65000);
// console.log(teacher1.salary1); // Outputs: undefined without the use of another function.
// // teacher1.setSalary(-10); // Throws an error 
// teacher1.setSalary(85000);
// console.log(teacher1.getSalary()); // Function allows access to private property

// // Static Attributes and Methods
// // Static keyword is associated with a class not the instance of a class.
// class Person1 {
//   name;
//   static numberOfPeople = 0;

//   constructor(name) {
//     this.name = name;
//     Person.numberOfPeople++;
//   }
//   // Static method
//   static getNumberOfPeople() {
//     // return Person1.numberOfPeople; // Both of these work with use of a method.
//     return this.numberOfPeople;
//   }
// }

// const p1 = new Person1("Lamin");
// const p2 = new Person1("Joe");
// console.log(Person1.numberOfPeople);
// console.log(Person1.getNumberOfPeople());

// // Inheritance (with extends keyword)
// // Parent, Super, Base class
// class Person2 {
//   name;
//   age;

//   constructor(name, age) {
//     this.name = name
//     this.age = age
//   }

//   greet() {
//     return this.name + " " + this.age;
//   }
// }
// // Child, derived class
// class Teacher2 extends Person2 {
//   salary;

//   constructor(name, age, salary) {
//     super(name, age); // Super function
//     this.salary = salary;
//   }
//   // This method overrides (higher precedent) the greet() in the Person class.
//   greet() {
//     // return "I am the teacher " + this.name;
//     return "I am the teacher " + super.greet(); // From parent clas
//   }
// }

// class Student extends Person2 {
//   classroom;

//   constructor(name, age, classroom) {
//     super(name, age); // Super function
//     this.classroom = classroom;
//   }
// }

// const s1 = new Student("Lamin", 35);
// const s2 = new Student("Lamin", 35, "6B");
// console.log(s1, s2)
// const t2 = new Teacher2("Sally", 45, 81000);
// console.log(t2)
// console.log(s1.greet()); // s1 using the prototype of Person2, bcos Student lacks one.s
// console.log(t2.greet()); // t2 using the prototype of Teacher2, bcos that exists.





