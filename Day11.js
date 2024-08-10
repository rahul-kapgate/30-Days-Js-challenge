// Async and Await

//Activity 1
//Task 1
let taskOne = new Promise(function(resolve,reject){

    setTimeout(function(){
        resolve("Task One Done");
    }, 2000);
});

taskOne.then(
    function(succes){
        console.log(succes);
    }
);

//Task 2
let taskTwo = new Promise(function(resolve,reject){

    let i = false;
    setTimeout(() => {
        if(i){
            resolve("Success msg");
        }else{
            reject("Error occure");
        }
    }, 2000);
});

taskTwo.then(
    function(resol){
        console.log(resol);
    }
)
.catch(
    function(err){
        console.log("Err : ", err);
        
    }
)

//Activity 2
//Task 3
let taskThree = new Promise(function(resolve,reject){

    setTimeout(function(){
        resolve("Task 3");
    },2000);

});


taskThree.then(function(msg){
   console.log("1", msg);
   return msg;
})
.then(function(msg2){
    console.log("2",msg2);
})


//Activity 3
//Task 4
let taskFour = new Promise(function(resolve,reject){

    setTimeout(function(){
        resolve("Task 4");
    },2000);
});

async function consumeTaskFour(mssege){
  let response = await taskFour
  
  console.log(response);

} 

consumeTaskFour();

//Task 5
let taskFive = new Promise(function(resolve,reject){
    
    setTimeout(function(){

        let i = false;

        if(i){
        resolve("Task 5")
        }else{
            reject("Error 5");
        }
    },2000);
});

async function consumeTastFive(){
    
    try {
        let response = await taskFive
        console.log(response);
    } catch (error) {
        console.log(error)
    }
    
};

consumeTastFive();

//Acitivity 5
//Task 6
// let gitHubAPI = fetch("https://api.github.com/users/rahul-kapgate");

// gitHubAPI.then(
//     function(info){
//         let data = info 
//         return data.json();
//     }
// )
// .then(
//     function(data){
//         console.log(data)
//     }
// ).catch(
//     function(err){
//         console.log(err);
//     }
// )

//Task 7

// let gitAPI = fetch("https://api.github.com/users/rahul-kapgate");

// async function consumeGitAPI(){
//     let response = await gitAPI

//     let data = await response.json();

//     console.log(data);
// }

// consumeGitAPI();



//ACtivity 5
//Task 8
let prmise1 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("P1");
    },2000);
});

let prmise2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("P2");
  }, 1000);
});

let prmise3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("P3");
  }, 1000);
});

let prmise4 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    reject("Error P4");
  }, 1000);
});



// Promise.all([prmise1,prmise2,prmise3]).then(
//     function(val){
//         console.log(val);
        
//     }
// )

Promise.all([prmise1, prmise2, prmise3,prmise4]).then(function (val) {
    
  console.log(val);
}).catch(function(err1){
    console.log(err1)
})


//Task 9
Promise.race([prmise1, prmise2, prmise3]).then(
    function(val){
        console.log(val);
    }
).catch(function(err2){
console.log(err2)
});