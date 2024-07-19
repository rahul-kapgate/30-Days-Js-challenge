//Loops

//Activity 1 : For Loop
//Task 1
for(let i=0;i<=10;i++){
    console.log(i , " ")
}

// let result = "";
// for (let i = 0; i <= 10; i++) {
//   result += i + " ";
// }
// console.log(result);

//Task 2
for(let i=1; i<=10; i++){
    console.log(i*5);
}


//Activity 2 : while Loop
//Task 3
let i=1,sum=0;
while(i <=10){
    sum += i;
    i++;
}
console.log("Sum : ", sum);

//Task 4
let j=10;
while( j > 0){
    console.log(j)
    j--;
}

//Do while loop : Activity 4
//Task 5
console.log("Do while")
let k=1;
do{
    console.log(k);
    k++;
}while(k <= 5);

//Task 6
let f = 1,fact = 1;
let num = 5;
do{
    fact *= f;
    f++;
}while(f <= num);

console.log("Factorial : ", fact);

//Activity 4 : nested loop
//task 7

for(let i=1; i<=5; i++){  // 5 rows
    let rls = "";
    for(let j=1; j<=i; j++){   // * equal to row number
          rls += "* "
    }
    console.log(rls);  // line break after very line 
}

//Activity 5 : loop control statements 
// Task 8
for(let i=1; i<=10; i++){
    if(i == 5){
        continue;
    }
    console.log(i);
}

//Task 9
for (let i = 1; i <= 10; i++) {
  if (i == 7) {
    break;
  }
  console.log(i);
}
