//DOM Manipulation 

//Activity 1
//Atsk 1

let heading = document.getElementById('heading1');
// let heading = document.querySelector('#heading1');
heading.innerText = "Changed Heading";

//Task 2
let div = document.getElementsByClassName('myClass');

// document.querySelector('.myClass');

div[0].style.backgroundColor = "Green";

//Activity 2
//Task 3
let newDiv = document.createElement('div');

newDiv.setAttribute('id', 'myDiv');
newDiv.setAttribute('class','divClass');

newDiv.innerText = "This is new Div";

document.body.append(newDiv);   /// appendChild

//Task 4
let list = document.querySelector('#list');

let newItem = document.createElement('li');
newItem.innerHTML = "Three";

list.append(newItem);

//Activity 4
//Task 5
let one = document.querySelector('#one');
one.remove();

//Task 6
let mylist = document.querySelector('#mylist');
mylist.removeChild(mylist.lastElementChild)

//Acitivity 4
// Task 5
let pic = document.querySelector('#myPic');

pic.setAttribute('src', 'imgerchaged.png');

//Task 6
let box = document.querySelector('#box');

box.setAttribute('style','color:green');
box.removeAttribute("style");

//Activity 5
//Task 7


let btn = document.querySelector('#btn');

let changeColor = function(){
para.style.color = "red";
}


let para = document.querySelector('#para');
btn.addEventListener('click', changeColor);


//Task 8
