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

