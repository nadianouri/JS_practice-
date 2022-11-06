
document.getElementById("buy");
console.log(document.getElementById("buy"));

const btn = document.getElementById("buy");
btn.style.backgroundColor = "turquoise";
btn.style.border = "none";
btn.style.color = "#000000";
const myNav = document.getElementById("nav");
//myNav.remove();
//querySelector with element 
document.querySelector("h3").style.color = "red";
//querySelector with class( first element that matches a css selector ex =>".title")
document.querySelector(".title").style.backgroundColor = "turquoise";
// concatenation 

let firstName = "Nadia";
let lastName = "Nouri"
let job = "front-end developer";
console.log(`my name is ${firstName} ${lastName} I'm a ${job}.`)

// nested arrays

let fruits = ["kiwi", "lemon", "apple", ["banana", "watermelon", ["mango", "avocado", "orange"]]];
console.log(fruits[3][2][1]);

//changing an element of the array

fruits[3][1] = "coco";
console.log(fruits);

let frukt = ["kiwi", "lemon", "apple", "banana"];
console.log(frukt.length);
console.log(frukt.length - 1);

let cars = ["BMW", "Fiat", "Honda", "Toyota"];
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

//splice(start,count,add elements)

let namn = ["layan", "yassine", "amina", "yazane"];
namn.splice(1, 0, "nadia", "azzeddine");
console.log(namn);

// removes items
namn.splice(2, 2);
console.log(namn);

//slice (start,end)
//The slice() method returns selected elements in an array, as a new array.
//The slice() method does not change the original array.

let items = ["lamp", "pot", "knife", "fork", "spoon"];
console.log(items.slice(1, 4));
//Array concat 
let arrOne = ["fatiha", "hakima", "souaad"];
let arrTwo = ["layla", "hanane", "mery"];
let children = arrOne.concat(arrTwo);
console.log(children);
//convert an array to a string
let arrThree = [1, 2, 3];
console.log(arrThree.join("$"));

//checking the entered email

let checkEmail = prompt('Enter your email');
let email = 'Nadianour169@gmail.com';
//removing spaces
console.log(checkEmail.trim() == email);

//convert toLowerCase/toUpperCase
let address = 'fisksätra';
console.log(address.toLowerCase());

// == compare values 
// === compare values and dataTypes

//comparison

let product = 'TV-Samsung'
let size = 40;
let salary = 12000;
//console.log(salary >= 10000 && size >= 40);
console.log(salary <= 10000 || size >= 40)

// if/else if 
result = prompt('What is your result');

if (result >= 90) {
    document.write('excellent');

} else if (result >= 70) {
    document.write('good');

} else if (result >= 50) {
    document.write('acceptable')

} else {
    document.write('fail');
}
//if in in another way
let age = prompt('what is your age');
let resultat = age > 18 ? 'Hello user' : age == 18 ? 'Your are now 18 years old' : 'You are still young';
console.log(resultat);

//switch

let day = prompt('what is the day today');
switch (day) {
    case 'one':
        console.log('Today is Sunday');
        break;
    case 'two':
        console.log('Today is Monday');
        break;
    case 'three':
        console.log('Today is Saturday');
        break;
    default:
        console.log('Today is Friday')
}
//loop 1
for(let i = 0; i <= 5; i++){
    console.log('Layan ' + i);
}

//loop using length 2
let names = ['Fatima','Najwa','Malika','Salima'];

for(let i = 0 ; i < names.length ; i++){
    console.log(names[i]);
}
// nested loop 3

let Bilar = ['Mercedes','Toyota','Ferrari'];
let Model= [2020,2021,2022];
let colors=['Black', 'white','Red']

for(let i = 0 ; i < Bilar.length ; i++){
    console.log(`Bil: ${Bilar[i]}`);
    for(let j = 0 ; j < Model.length ; j++){
        console.log(`Model: ${Model[j]}`);
    }
    for(let k = 0 ; k < colors.length ; k++){
        console.log(`Color: ${colors[k]}`);

    }
    console.log('_________________');
}

//loop 4: continue / break

let users = ['Azzeddine','Oussama',1,2,3,4,'Tarik','Ayoub'];
for(let i = 0 ; i < users.length ; i++){
    // if(users[i] == 'Oussama'){
    // if(users[i] != 'Oussama'){
    //!= : the inequality operator 
    if(typeof users[i] == 'number'){

        continue;
    }
    console.log(users[i]);
}
//loop : break

let user =['Hiba','Ghita','Taha','Fati','Sara'];
for(let i = 0 ; i < user.length ; i++){
    console.log(user[i]);
    if(user[i] == 'Fati'){

        break;
    }
}

// loop :label
let products = ['ballon','pen','book','glass'];
let color = ['White','red','orange','blue'];
mainLoop:for(let i = 0; i < product.length ; i++){
    console.log(products[i]);
    nestedLoop:for(let j=0 ; j < color.length ; j++){
        if(color[j]=== 'blue')
        break nestedLoop;
        console.log(color[j])

    }
    console.log('___________');
};
// add product to page 

let produkter = ['Shampoo','Oil','Balsam','Soap','Perfume'];
let färger = ['rosa','röd','grön','svart'];
let showCount = 4;
document.write(`<h1>show ${showCount} products</h1>`);
for(i = 0; i < showCount; i++){
    document.write(`<div>`);
    document.write(`<h3>${produkter[i]}</h3>`);
    for(j=0; j<färger.length; j++){
        //document.write(`<p>${färger[j]}</p>`);
    }
    document.write(`<p>${färger.join(' / ')}</p>`)
    document.write(`</div>`)
}

// looping on sequences

let myFriends = [1,2,'Layan','Ghita','Hiba','Taha'];
let onlyNames = [];
for(let i=0; i< myFriends.length ;i++ ){
    if (typeof myFriends[i]==='string'){
        onlyNames.push( myFriends[i]);
    }

};
console.log(onlyNames);

//functions
function prod(price,taxes,ads){
    let product = price + taxes;
    let total = product + ads;
    console.log('Here is the price of the product ' + total);
}
prod(200,2.5,60);

//function (return)

function calcAgeByDays(age){
    let theResult = age * 365;
    return theResult;
}
let days = calcAgeByDays(32);
console.log(days);

function calcAgeByHours(age){
    let theResult = age * 24;
    return theResult;
}
let hours = calcAgeByHours(days);
console.log(hours);

//function with loop

function generateYears(start,end,exclude){
    for(i = start ; i <= end ; i++) {
        if(i === exclude){
            continue;

        }
        console.log(i);
    }

}
generateYears(1990,2022,2020)

//hiosting
let x;
x = 'hello world';
console.log(x);

//default function parameters

//function sayHello(username, weight){

function sayHello(username, weight = 'unknown'){
    if (weight === undefined){
        weight === 'unknown' ; 
    }
    return `hello ${username} your weight is ${weight}`;

}
console.log (sayHello('Nadia'));

// The rest parameter
// only one array allowed
// must be the last array if you have other elements

function calc(...skills){
    let results = 0;
    for(let i = 0 ; i < skills.length ; i++){
        results += skills[i]; // results = results + skills[i]

    }
    return `final result is ${results}` ;

}
console.log(calc(20,30,50,10,40));


//DOM 

let myIdElement = document.getElementById('special');
let myTagElement = document.getElementsByTagName('h3');
let myClassNameElement = document.getElementsByClassName('title');
let myQueryElement = document.querySelector('.title');
let myQueryAllElement = document.querySelectorAll('.title');
let myDiv = document.getElementById('mydiv');
myDiv.innerHTML = 'Hello my client';
let myTitle = document.createElement('h2');
myTitle.innerHTML = 'This is the best coffee in the world';
myDiv.appendChild(myTitle);

console.log(myIdElement);
console.log(myTagElement[2]);
console.log(myClassNameElement[1]);
console.log(myQueryElement);//it returns only the first element with class 'title' 
console.log(myQueryAllElement);// it returns all the elements with the class 'title'
console.log(myQueryAllElement[1]);//it will return the second element with the class 'title'

let img = document.getElementById('pic');
//console.log(img.attributes);
//console.log(img.hasAttributes());
//console.log(img.hasAttribute('className'));
//console.log(img.attributes[2]);
if(img.hasAttribute('alt')){
    //console.log('found');
    if(img.getAttribute('alt')=== ""){
        img.removeAttribute('alt');
    }else{
        img.setAttribute('picture','image')
    }
    
}else{
    console.log('not found');

}
console.log(img.attributes);

if (document.getElementsByTagName('div')[5].hasAttributes()){
    console.log('has attributes');

}else(
    console.log('has no attributes'));









