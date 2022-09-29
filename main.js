
document.getElementById("buy");
console.log(document.getElementById("buy"));

const btn = document.getElementById("buy");
btn.style.backgroundColor = "turquoise";
btn.style.border = "none";
btn.style.color ="#000000";
const myNav = document.getElementById("nav");
//myNav.remove();
//querySelector with element 
document.querySelector("h2").style.color = "red";
//querySelector with class( first element that matches a css selector ex =>".title")
document.querySelector(".title").style.backgroundColor = "turquoise";
// concatenation 

let firstName = "Nadia";
let lastName = "Nouri"
let job = "front-end developer";
 console.log(`my name is ${firstName} ${lastName} I'm a ${job}.`) 

 // nested arrays

 let fruits = ["kiwi","lemon","apple",["banana","watermelon",["mango","avocado","orange"]]];
 console.log(fruits[3][2][1]);

 //changing an element of the array
 fruits[3][1] = "coco";
 console.log(fruits);

 let frukt = ["kiwi","lemon","apple","banana"];
 console.log(frukt.length);
 console.log(frukt.length - 1);

 let cars = ["BMW","Fiat","Honda","Toyota"];
 console.log(cars);

 //The pop() method removes the last element from an array:
 cars.pop();
 console.log(cars);
 // remove the first element from the array 
 cars.shift();
 console.log(cars);
 // add a new element to an array at the beginning
 cars.unshift("volvo");
 console.log(cars);
 //The push() method adds a new element to an array (at the end):
 cars.push("Ford");
 console.log(cars);


