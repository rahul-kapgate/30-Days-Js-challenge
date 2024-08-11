//--------->Activity 1

const { add } = require("lodash");

//Task 1
function Outer(){

    let OuterMessage = "This is outer Function Variable";

    function Inner(){
        console.log(OuterMessage);
    }

    return Inner;

};

let closure = Outer();

closure();

// Inner();

//Task 2
function Counter(){

    let counter = 0;

    function increment(){
        counter++;

        console.log(counter);
    }

    return increment;
}

let incrementBy1 = Counter();

incrementBy1();
incrementBy1();

//------------> Activity 2
//Task 3
function generateUniqueId() {
    let lastId = 0; // This variable is enclosed by the inner function

    return function() {
        lastId++; // Increment the last ID
        return lastId; // Return the new ID
    };
}

const getNextId = generateUniqueId();

console.log(getNextId()); // Output: 1
console.log(getNextId()); // Output: 2
console.log(getNextId()); // Output: 3


//Task 4
function task(getname){
    let name = getname;

    function greet(){
        console.log(`hello ${name}`);
    }

    return greet();
}

task("Rahul");

//--------->Activity 3
//Task 5
const functions = [];

for (let i = 0; i < 5; i++) {
  functions[i] = (function(index) {
    return function() {
      console.log(index);
    };
  })(i);
}

// Testing the functions
functions[0](); // Logs 0
functions[1](); // Logs 1
functions[2](); // Logs 2
functions[3](); // Logs 3
functions[4](); // Logs 4


//---------> Task 4
//Task 5

// function list(){

//     let arr = [];

//     function addEl(el){
     
//         arr.push(el);
//     }

//     function removeEl(){
//         arr.pop();
//     }

//     function displyList(){
//         for(i=0; i<arr.length; i++){
//             console.log(arr[i]);
//         }
//     }
// }


// addEl(10);

function createListManager() {
    let arr = [];

    return {
        add: function(el) {
            arr.push(el);
        },
        remove: function() {
            arr.pop();
        },
        list: function() {
            console.log("List of items:");
            for (let i = 0; i < arr.length; i++) {
                console.log(arr[i]);
            }
        }
    };
}

// Example usage:
const listManager = createListManager();

listManager.add(10);
listManager.add(20);
listManager.add(30);
listManager.list();    // Logs: 10, 20, 30

listManager.remove();
listManager.list();    // Logs: 10, 20


//----------------> Activity 5
// Task 7







