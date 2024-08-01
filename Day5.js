// Day 5 : Function 

//Activity 1 
//Task 1
function checkNum(num){
    if(num%2 === 0){
        console.log("Even")
    }else{
        console.log("odd");
    }
}

checkNum(10);

//task 2
function squrNums(num){
   return num * num
}

console.log(squrNums(5));

//Acitvity 2 : Expression function 
//Task 3
let max = function(a,b){
    return Math.max(a,b);
}

console.log(max(12,15));

//Task 4
let str  = function(a,b){
    console.log(a +" "+ b);
}

str("Rahul" ,"kapgate");

//Activity 3  : Arrow Function 
//Task 5
let sum = (a,b) => {
    console.log(a+b);
}
sum(12,8);

//task 6
let findSysmbol = (str,key) => {
   console.log(  str.includes(key));
}
findSysmbol("Rahul" , 'a');

//Activity 4 :parameters and default value 
//Task 7
function product(a,b=5){
    console.log(a*b);
}
product(2,3);
product(2);

//Task 8
function greeting(name,age=30){
    console.log("hello", name ,age );
}
greeting("rahul",22);
greeting("Shivam");

//Activity 5 : higher order functions
//Task 9
function repeteFun(func, time){
    for(let i=1; i<=time; i++){
        func();
    }
}

function greeting(){
    console.log("hello");
}

repeteFun(greeting, 5);


// Task 10

function composeFunctions(func1, func2, value) {
  return func2(func1(value));
}

// Example usage:
function addTwo(num) {
  return num + 2;
}

function multiplyByThree(num) {
  return num * 3;
}

const result = composeFunctions(addTwo, multiplyByThree, 5);
console.log(result); // Output: 21
// Explanation: addTwo(5) -> 7, multiplyByThree(7) -> 21







