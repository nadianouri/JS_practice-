let myElement = document.createElement('div');
let myHeading = document.createElement('h2');
let myParagraph = document.createElement('p');
let myAttr = document.createAttribute('data');
let myText = document.createTextNode('My products :');
let myComment = document.createComment('this is a div');
let myHeadingText = document.createTextNode('Tables:');
let myParagraphText = document.createTextNode('These tables are suitable for everyone.')


myElement.className = 'product';
myHeading.className = 'title';

//first way to add an attribute to an element
myElement.setAttributeNode(myAttr);

// second way to add an attribute to an element with a value 'Testing'
myElement.setAttribute('data-test','Testing');

//Append the comment to the element
myElement.appendChild(myComment);

//Append the text to the element
myElement.appendChild(myText);

//Append heading text
myHeading.appendChild(myHeadingText);

// add heading to the main element
myElement.appendChild(myHeading);

//append paragraph text
myParagraph.appendChild(myParagraphText);

// add myParagraph to the main element
myElement.appendChild(myParagraph);





//Append the element to the body
document.body.appendChild(myElement);

console.log(myElement);
console.log(myElement.children);
console.log(myElement.children[1]);
console.log(myElement.childNodes);
console.log(myElement.childNodes[0]);
console.log(myElement.firstChild);
console.log(myElement.lastChild);
console.log(myElement.firstElementChild);
console.log(myElement.lastElementChild);

function hello(){
    console.log('hello!');
};

let btn = document.getElementById('btn');
btn.onclick = function product(){
    document.body.style.background = 'rgb(185, 150, 218)';

};
btn.addEventListener('click',function(){
    document.body.style.background = 'pink';
});
btn.addEventListener('click',function(){
    btn.style.background = 'yellow';

});
btn.addEventListener('click',function(){
    btn.style.color = 'green';
});
// onclick event === you may have only one event assigned
//addEventListener === If you need to attach more than one event to an element,
//you’re probably looking to use addEventListener()

//form validate
 
let userInput = document.querySelector('[name = name]');
let ageInput = document.querySelector('[name = age]');

document.forms[0].onsubmit = function(event){
     let userValid = false;
     let ageValid = false;
     
     if(userInput.value !== '' && userInput.value.length <= 10 ){
        userValid  = true; 
     }
     if(ageInput.value !== ''){
        ageValid = true;

     }

     if( userValid === false || ageValid === false ){
        event.preventDefault();
        } 

};

//Dom Events Simulation || Auto Event
let one = document.querySelector('.one');
let two = document.querySelector('.two');

window.onload = function(){
    one.focus(); 
};

window.onload = function(){
    two.placeholder ='Your  Age';
};

one.oncontextmenu = function(){
    one.blur();
};
//one.onblur = function(){
    //document.links[0].click();
//};

let button = document.getElementById('button');
button.onclick = function(){
    button.classList.add('name','hide');
}
button.oncontextmenu = function(){
    button.classList.remove('name');

}
console.log(button.classList.contains('btn')); // it checks if the class exists or not 
console.log(button.classList.item('1')); //
// toggle === add or remove a class by using add() and remove()methods

//button.onclick = function(){
    //button.classList.toggle('name');
// }

