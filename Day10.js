//Acitvity 1
//Task 1
let btn = document.querySelector('#btn');

let para = document.querySelector('#para');

let flag = true;

btn.addEventListener('click', function(){

   if(flag == true){
    para.style.color = "Green";
    flag=false;
   }else{
     para.style.color = "black";
     flag=true;
   }
    
})

//task 2

let pic = document.querySelector("#pic1");

let btn2 = document.querySelector("#btn2");

btn2.addEventListener("dblclick", function () {
  console.log("hello");
  if (pic.style.visibility === "hidden") {
    pic.style.visibility = "visible";
  } else {
    pic.style.visibility = "hidden";
  }
});


//Activity 2
//Task 3
let box = document.querySelector('#box');

box.addEventListener("mouseover", function () {
  box.style.backgroundColor = "green";
});


//Task 4

box.addEventListener("mouseout", function () {
  box.style.backgroundColor = "red";
});

//Activity 3
//Task  5
const inputField = document.getElementById("inputField");
const displayText = document.getElementById("displayText");

// Task 5: Log key pressed to the console
inputField.addEventListener("keydown", function (event) {
  console.log(`Key pressed: ${event.key}`);
});


// Task 6: Display the current value in the paragraph
        inputField.addEventListener("keyup", function() {
            displayText.textContent = inputField.value;
        });

//Activity 4
//Task 7
let myForm = document.querySelector('#myForm');

myForm.addEventListener('submit',function(e){
  e.preventDefault(e);
  
  const formData = new FormData(e.target);
        formData.forEach((value, key) => {
            console.log(key + ": " + value);
})

});

//task 8
const usernameInput = document.getElementById("username");

// Add an event listener for the change event
usernameInput.addEventListener("change", function (event) {
  // Get the value of the input
  const newValue = event.target.value;

  // Update the output paragraph
  document.getElementById(
    "output"
  ).innerText = `Username changed to: ${newValue}`;
});

//Acitvity 5
//Task 9
const itemList = document.getElementById("itemList");

// Add an event listener to the parent element
itemList.addEventListener("click", function (event) {
  // Check if the clicked element is a list item
  if (event.target.tagName === "LI") {
    // Handle the event
    alert(`You clicked on ${event.target.innerText}`);
  }
});

//Task 10
   const itemList1 = document.getElementById("itemList1");
   const addItemButton = document.getElementById("addItem");

   // Event delegation: listen for clicks on any list item
   itemList.addEventListener("click", function (event) {
     if (event.target.tagName === "LI") {
       alert(`You clicked on ${event.target.innerText}`);
     }
   });

   // Dynamically add new items to the list
   addItemButton.addEventListener("click", function () {
     const newItem = document.createElement("li");
     newItem.innerText = `Item ${itemList.children.length + 1}`;
     itemList.appendChild(newItem);
   });