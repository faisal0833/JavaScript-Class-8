// // Function Calling other Function
// const calculateAge = function (birthYear){
//     return 2022 - birthYear;
// };

// const jobLeft = function (birthYear){
//     const age = calculateAge(birthYear);
//     return 65 - age;
// };

// // const aAge = calculateAge(1975);
// // console.log(aAge);

// const aJobLeft = jobLeft(1975);
// console.log(aJobLeft);

// // JavaScript Events
// function displayText(){
//     console.log("This is Console Text!");
// }

// function alertText(){
//     alert("This is Alert Text!");
// }

// //JavaScript Strings
// const firstName = "Asif";
// const lastName = "Akbar";
// console.log(firstName);
// console.log(lastName);

// // Example
// const text = 'I love "Bangladesh!"';
// console.log(text);

// // Example 2
// const text2 = "I love 'Bangladesh!'";
// console.log(text2);

// // Example 3
// const text3 = "I love \"Bangladesh!\"";
// console.log(text3);

// // Example 4
// const text4 = "I love \\ Bangladesh!";
// console.log(text4);

// String Methods
// const x = "Faisal Kabir";
// console.log(x.length);

// String Slice
// const fruits = "Apple, Banana, Mango";
// console.log(fruits);

// const fruit1 = fruits.slice(0, 5);
// console.log(fruit1);

// const fruit2 = fruits.slice(7, 13);
// console.log(fruit2);

// const fruit3 = fruits.slice(15, 20);
// console.log(fruit3);

// console.log(fruit1, fruit2, fruit3);

// //Negative Slice
// const fruits = "Apple, Banana, Mango";

// const fruit1 = fruits.slice(-5);
// console.log(fruit1);

// const fruit2 = fruits.slice(-13, -7)
// console.log(fruit2);

// // Substring (Same as Slice)
// const fruits = "Apple, Banana, Mango";
// const fruit1 = fruits.substring(0, 5);
// console.log(fruit1);

// // Substr
// const fruits = "Apple, Banana, Mango";
// const fruit1 = fruits.substr(0, 5);
// console.log(fruit1);

// // String replace
// const text = "I love Rangpur";
// console.log(text);

// const text2 = text.replace("Rangpur", "Dhaka");
// console.log(text2);

// // String toUpperCase
// const text = "Hello World!";
// console.log(text);
// console.log(text.toUpperCase());

// // String toLowerCase
// const text = "Hello World!";
// console.log(text);
// console.log(text.toLowerCase());

// // String trim
// const text = "        Hello World!        ";
// console.log(text);
// console.log(text.trim());

// String Search (Almost Equals to indexof but not same)
const text = "Rahim Karim Sakib Karim";
console.log(text.indexOf("Sakib"));
console.log(text.indexOf("Karim"));

console.log(text.lastIndexOf("Karim"));

console.log(text.search("Karim"));