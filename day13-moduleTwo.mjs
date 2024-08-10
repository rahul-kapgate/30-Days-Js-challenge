export function sayHello(){
    console.log("Hello World !!");
}

export let person = {
    name : "Rahul",
    age : 22,
    info : function(){
        console.log(`My Name Is ${this.name} and my Age is ${this.age}`)
    }
};

export const foo = "bar";
export function greet(name) {
  console.log(`Hello, ${name}!`);
}

export default function defaultFun() {
  console.log("Default Function called");
}


// const PI = 3.14159;
// const E = 2.71828;

// function add(a, b) {
//     return a + b;
// }

// function subtract(a, b) {
//     return a - b;
// }

// module.exports = {
//     PI,
//     E,
//     add,
//     subtract
// };


export const PI = 3.14159;
export const E = 2.71828;

export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}


