//AActivity 1
//Task 1
function test(){

    let msg = "Test Function Success";

    // return msgd;
    return msg;
};

try {
    let result = test();

    console.log(result);

}catch (error) {
    
    console.log(error);
};

//Task 2

function divideNumbers(numerator, denominator) {
  if (denominator === 0) {
    throw new Error("Denominator cannot be zero."); // Throw an error if denominator is zero
  }
  return numerator / denominator;
}

try {
     let rls = divideNumbers(10,0);
     console.log(rls);
} catch (error) {
    console.error(error.message)
}

//Activity 2
//Task 3

function EvenOdd(num){

    if(num%2 ==! 0){
          throw new Error(" Error : Not a Even");
    }else {
        let msg = "Even";
        return msg;
    }
}


try {
   let rls = EvenOdd(3); 
} catch (error1) {
    console.error(error1.message);
}finally{
    console.log("Operation Done");
};

//Activity 3
//Task 4
// Task 4: Create a custom error class
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";  // Assign a name to the error
    }
}

// Function that throws an instance of the custom error
function throwErrorExample() {
    throw new CustomError("This is a custom error message.");
}

try {
    throwErrorExample();  // Attempt to execute the function
} catch (error) {
    console.error(`${error.name}: ${error.message}`);  // Handle the custom error
}

// Task 5: Custom error for validation
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";  // Assign a name to the error
    }
}

// Function to validate user input
function validateInput(input) {
    if (typeof input !== "string" || input.trim() === "") {
        throw new ValidationError("Input cannot be empty or non-string.");
    }
    return input.trim();  // Return the trimmed input if valid
}

try {
    let userInput = "";  // Example of invalid input
    let validatedInput = validateInput(userInput);  // Validate the input
    console.log("Validated input:", validatedInput);
} catch (error) {
    console.error(`${error.name}: ${error.message}`);  // Handle the custom error
}


//Activtiy 4
//task 6

let taskSix = new Promise(function(resolve, reject){

     let i = Math.floor(Math.random()*10+1);

     console.log(i);

    setTimeout(function(){
         if(i < 5){
            resolve("Task Six Done")
         }else{
            reject("Error Six");
         }
    }, 1000)
})

// taskSix.then(
//     (msg) => {
//         console.log(msg);
//     }
// ).catch(
//     (err) =>{
//         console.log(err)
//     }
// )

//Task 7

async function consumeTaskSix(){

    try {
        let response = await taskSix
        console.log(response);
    } catch (error) {
        console.log(error)
    }
}

consumeTaskSix();


//Acitivity 5
//Task 8

let gitHubAPI = fetch("https://api.github.com/users/rahul--kapgate");

// gitHubAPI.then(
//     function(data){
//         return data.json();
//     }
// ).then(
//     function(info){
//         console.log(info);
//     }
// ).catch(
//     function(err){
//         console.error("Data Not Found ");
//     }
// );

//Task 9

async function consumeHubApi(){

    try {
        let response = await gitHubAPI
    
        let info = await response.json()
    
        console.log(info)
    } catch (error) {
        
        console.log(error)
    }
}

consumeHubApi();
