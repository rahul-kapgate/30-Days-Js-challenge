// Array 

//Activity 1  : array creation and acces
//Task 1
let arr = [1,2,3,4,5];
console.log(arr);

//Task 2
console.log(arr[0] ,arr[4]);

// ACtivity 3  : basic Array methods
//Task 3
arr.push(6);
console.log(arr);

//Task 4
arr.pop();
console.log(arr);

//Task 5
arr.shift();
console.log(arr);

//Task 6
arr.unshift("new 1");
console.log(arr);

let arr1 = [1,2,3,4,5,6,7,8,9,10];
//Activtiy 4 : Array methods Intermediate
//Task 7
let newArr1 =arr1.map( (val) =>{
    return val *2;
})
console.log(newArr1);

//Task 8
let newArr2 = arr1.filter(
    (val) => {
        return val%2 === 0;
    }
)

console.log(newArr2);

//Task 9
let sum = arr1.reduce(
    (pre,cur) =>{
        return pre + cur;
    } , 0 
)

console.log(sum);


//Activtiy 4 : Array Iteration
//Task 10
let myArr = [1,2,3,4,5,6,77,8,9,0];
for(let i=0; i<myArr.length; i++){
    console.log(myArr[i]);
}

//Task 11
console.log("forEach");
myArr.forEach(val => {
    console.log(val);
});

//Activity 5 : mutli- Dimensional Arrays
//Task 12
let matrix = [[1,2,3],[4,5,6],[7,8,9]];

console.log(matrix);

//Task 13
console.log(matrix[0][0]);
console.log(matrix[2][2]);



