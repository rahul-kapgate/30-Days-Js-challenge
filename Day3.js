// Control statement

//Activity 1 : if-else
// Task 1
let num1 = 5;

if(num1 > 0){
    console.log("Positive");
}else if(num1 == 0){
    console.log("Zero");
}else if(num1 < 0){
    console.log("Negative");
}

//Task 2
age = 21;
if(age >= 18 ){
    console.log("You can VOTE");
}else {
    console.log("You Can't VOTE");
}

//Activity 2 : Nested-if else 
// task 3
let n1=12,n2=15,n3=21;
if(n1 > n2){
    if(n1 > n3){
        console.log(n1);
    }else{
        console.log(n3);
    }
}else {
    if(n2 > n3){
        console.log(n2);
    }else {
        console.log(n3);
    }
}


//Activity 3 : Switch statement 
// task 4
let day = 4;
switch (day) {
  case 1:
    console.log("Monday");
    break;

  case 2:
    console.log("Tuesday");
    break;

  case 3:
    console.log("wednesday");
    break;

  case 4:
    console.log("Thesday");
    break;

  case 5:
    console.log("Friday");
    break;

  case 6:
    console.log("staraday");
    break;

  case 7:
    console.log("sunday");
    break;

    default :
    console.log("Invaild");

}

//Task 5 

// let marks = 87;

// switch(marks){

//     case marks > 90 :
//         console.log("A");
//         break;

//     case marks > 80 :
//         console.log("B");
//         break;

//     case marks > 70 :
//         console.log("C");
//         break; 
        
//     case marks > 60 :
//             console.log("D");
//             break;

//     default :
//         console.log("InValid");

// }

let marks = 87;
let grade;

switch (true) {
    case marks > 90:
        grade = "A";
        break;
    case marks > 80:
        grade = "B";
        break;
    case marks > 70:
        grade = "C";
        break;
    case marks > 60:
        grade = "D";
        break;
    default:
        grade = "Invalid";
}

console.log(grade); // Outputs: B


//Activity 4 :conditional(ternary Operatoers)
//Task 6
10%2==0 ? console.log(true) : console.log(false);

// Activity 4 : Combining Conditions 
//Task 7
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(year + ' is a leap year.');
    } else {
        console.log(year + ' is not a leap year.');
    }
}

// Example usage:
isLeapYear(2024); // 2024 is a leap year.
isLeapYear(2023); // 2023 is not a leap year.
isLeapYear(1900); // 1900 is not a leap year.
isLeapYear(2000); // 2000 is a leap year.
isLeapYear(1800);
