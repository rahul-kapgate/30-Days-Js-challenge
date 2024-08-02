//ES6+

//Activtiy 1 :Template literals
//Task 1
let name="Rahul",age=22;
console.log(`Hey am ${name} and i am ${age} `)

//Task 2
console.log(`This is liine 1
    This is line 2
          line 3
            line 4
    line 5`);

 //Activity 2: Destrutuing 
 //Task 3 
 let arr = [1,2,3,4,5,7,8,9];
 [one , two] = arr;
 console.log(one);
 console.log(two);

 //Task 4
 let Book = {
    'author' : "Rahul",
    year : 2002,
    title : "The Best"
 }

 console.log(Book.author);
 //  console.log(author);    error 

 const { author } = Book; 

 console.log(author);

 //Acitivity 4
 //Task 5
 let arr1 = [1,2,3,4,5,6];
 let arr2 = [11,12,13,14,15];
 let newArray = [...arr1,7,8,9,10,...arr2];

 console.log(newArray);

 //Task 6
 function sum(...num){
    return num;
 }

let myArr = sum(1,2,3,4,5);

console.log(myArr);

let sum1 = 0;
for (const val of myArr) {
    sum1 += val;
}

console.log(sum1);

//Acitvity 4
//Task 7
let power = (num1 , num2 = 2) => {
    console.log(num1*num2);
}

power(2,3);
power(5);

//Acitivity 5
// Task 8
const a = "Rahul";
const b = 22;
let myFun = function(){
    console.log("hello");
}

let myObj = {
    a : a,
    b : b,
    c : myFun
}
console.log(myObj);

//shortHand
let NewObj = {a,b,myFun};
console.log(NewObj);

//Task 9
const propName = "favoriteColor";
const propValue = "blue";

const dynamicObject = {
  [propName]: propValue,
};

console.log(dynamicObject);

