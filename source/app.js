// Chapter # 3   Variables for Numbers
// var weight = 50;
// weight += 25;
// console.log('weight :>> ', weight);

// const originalNumber = 53;
// let newNumber = originalNumber + 17;
// console.log('newNumber :>> ', newNumber);

// let num1 = 30;
// let num2 = 60;
// const sum = num1 + num2;
// console.log('sum :>> ', sum);

// let roll1 = 234;
// roll1 = roll1 + 7;
// console.log('roll1 :>> ', roll1);

// Chapter # 3 Math expressions: Familiar operators
// const result = 32 % 9
// console.log('result :>> ', result);

// Chapter # 6 Math expressions: Unfamiliar operators
// let num = 10;
// num += 10;
// console.log("num :>> ", num);
// let result = 30 + num;
// console.log("result :>> ", result);
// result--;
// console.log('result :>> ', result);
// result -= 9;
// console.log('result :>> ', result);

// Chapter # 7 Math expressions: Eliminating ambiguity
// var resultOfComputation = (2 * 4) * 4 + 2;
// console.log('resultOfComputation :>> ', resultOfComputation);

// let calculate = (2 * 4) * (4 + 2);
// console.log('calculate :>> ', calculate);

// Chapter # 8 Concatenating text strings
// let name = "Mehmood Alam";
// alert(`Hello ${name}!`);

// Chapter # 9 & 10 if statements//////////////
// let user = prompt("Enter your country Name");
// if(user === "Pakistan"){
//     alert("You are pakistani");
// } else {
//     alert("Sorry not found");
// }

// let user = prompt("Enter your country Name");
// let userInput = "Pakistan";
// if (user == userInput) {
//     alert("Correct!");
// };

// Chapter # 12 if...else and else if statements//////////////
// let user = prompt();
// if (user === "pakistan") {
//   alert("Wellcome");
// } else if (user === "Madina") {
//   alert("Wellcome");
// } else if (user === "Makkah") {
//   alert("Wellcome");
// } else if (user === "turkey") {
//   alert("Wellcome");
// } else if (user === "kuwait") {
//   alert("Wellcome");
// } else {
//   alert("Sorry not found");
// }

// Chapter # 13 Testing sets of conditions//////////////
// let name = prompt();
// let age = 24;
// let rollNumber = 110050;
// if (name === "Mehmood" && age > 24 && rollNumber === 110050) {
//   alert("Congratulation you are eligble!");
// } else {
//   alert("Sorry try again");
// };

// let name = prompt();
// let age = 24;
// let rollNumber = 110050;
// if (name === "Mehmood" || age > 24 || rollNumber !== 110050) {
//   alert("Congratulation you are eligble!");
// } else {
//   alert("Sorry try again");
// };

// let name = prompt("Enter your name?");
// let age = +prompt("Enter your age?");
// let city = prompt("Enter city name?");
// let country = prompt("Enter country name?");
// let gender = prompt("Are you male or Female?");
// let religion = "Islam";
// if (
//   //   name === ("Mehmood" || "Fareed" || "Faraz" || "Siddique") &&
//   name === "Mehmood" ||
//   name === "Fareed" ||
//   name === "Faraz" && age > 18 && city === "Makkah" ||
//   city === "Madina" ||
//   city === "Lahore" ||
//   city === "Islamabad" ||
//   city === "Karachi" && country === "Pakistan" && gender === "Male" ||
//   gender === "Female" && religion === "Islam"
// ) {
//   alert("Congratulation you are eligble!");
// } else {
//   alert("you are not eligble!");
// }

// Chapter # 15 Array//////////////
// const cities = ["Karachi","Multan","Islamabad","Lahore"];
// console.log('cities :>> ', cities[0]);

// Chapter # 15 Array Adding and removing elements//////////////
// const animals = [];
// animals[0];
// animals[3] = "Cat";
// animals[2] = "Elephant";
// console.log('animals :>> ', animals);
// animals[0] = "Lion";
// console.log('animals[1] :>> ', animals[0]);

// const cars = ["Suzuki", "Honda", "Toyota", "KIA", "Hino"];
// // console.log('cars :>> ', cars);
// cars.push("Hyundai");
// // cars.pop();
// cars.unshift("BMW");
// cars.unshift("Ferrari");
// cars.shift();
// console.log("cars :>> ", cars);

// Chapter # 17 Array Removing, inserting,and extracting elements//////////////
// const names = ["Mehmood", "Noureen", "Fareed", "Faraz", "Nousheen", "Siddique"];
// names.splice(2, 2, "Ali");
// // names.splice(3, 3);
// console.log(names);

// let text = "Hello world!";
// let result = text.slice(0, text.length);
// console.log(result);

// const names = ["Mehmood", "Noureen", "Fareed", "Faraz", "Nousheen", "Siddique"];
// let selectNames = names.slice(1, -1);
// console.log(names);
// console.log(selectNames);

// Chapter # 18 for loops//////////////
// let cityToCheck = prompt();
// const cleanestCities = [
//   "Islamabad",
//   "Lahore",
//   "RawalPindi",
//   "Makkah",
//   "Madina",
// ];
// if (cityToCheck === "") {
//   alert("Enter your city name?");
// } else {
//   if (cleanestCities.indexOf(cityToCheck) >= 0) {
//     alert("It's one of the Cleanest City!");
//   } else {
//     alert("It's not on the list.");
//   }
// }
// if (cityToCheck === cleanestCities[0]) {
//   alert("It's one of the Cleanest City!");
// } else if (cityToCheck === cleanestCities[1]) {
//   alert("It's Second of the Cleanest City!");
// }else if(cityToCheck === cleanestCities[2]){
//   alert("It's Third of the Cleanest City!");
// } else if(cityToCheck === cleanestCities[3]){
//   alert("It's Fourth of the Cleanest City!");
// } else if (cityToCheck === cleanestCities[4]){
//   alert("It's Fifth of the Cleanest City!");
// } else {
//     alert("It's is not on the list.")
// }
// console.log(cleanestCities[4]);

//OR//
//////////////////// Short Way with the help of For loop //////////////////////////
// for(let i = 0; i < cleanestCities.length; i++){
//     if(cityToCheck === cleanestCities[i]){
//         alert("It's one of the Cleanest City!");
//     } else {
//         alert("It's is not on the list.");
//     };
// };

//OR//
// const cleanestCities = [
//   "Islamabad",
//   "Lahore",
//   "RawalPindi",
//   "Makkah",
//   "Madina",
// ];
// let user = prompt("Enter city name");
// if (!user) {
//   alert("please type your input");
// } else {
//   //   if (cleanestCities.includes(user)) {
//   //     alert("It's one of the Cleanest City!");
//   //   } else {
//   //     alert("It's is not on the list.");
//   //   }
//   ///////////////or/////////////////
// //   if (cleanestCities.filter((e) => e === user).length === 0) {
// //     alert("It's is not on the list.");
// //   } else {
// //     alert("It's one of the Cleanest City!");
// //   }
// }

// const cleanestCities = [
//   "Islamabad",
//   "Lahore",
//   "RawalPindi",
//   "Makkah",
//   "Madina",
// ];
// let cityToCheck = "wddw";
// let matchFound = false;
// debugger;
// for (let i = 0; i <= 4; i++) {
//   if (cityToCheck === cleanestCities[i]) {
//     matchFound = true;
//     alert("It's one of the cleanest cities");
//     break
//   }
// }
// if (!matchFound) {
//   alert("It's not on the list");
// }


const cleanestCities = [
  "Islamabad",
  "Lahore",
  "RawalPindi",
  "Makkah",
  "Madina",
];