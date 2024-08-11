//-------->Activity 1
// Task 1
class person{
     name = "Rahul";
     age = 22;

     greet(){
        console.log(`hello`);
     };

     updateAge(age){
        this.age = age;
        console.log(this.age);
     }

     //static method
     static greeting(){
        console.log(`static greeting !!!`);
     }


     getName(){
        console.log(this.name,"",this.age)
     }

     setName(name,age){
        this.name = name;
        this.age = age;

        console.log(this.name,"",this.age);
     }


};

let person1 = new person();

person1.greet();

//Task 2

person1.updateAge(23);

//------>Activity 2
//Task 3
class student extends person {

    static studentCreated = 0;
constructor(){
    
    super();

    student.studentCreated++;
    console.log(`Student Created : ${student.studentCreated}`);
}


  studentID = 39;

  getStudentId() {
    console.log(this.studentID);
  };

  greet() {

    super.greet();  // to call person class greet() method 

    console.log(`hello ${this.studentID}`);
  };
}

let studentOne = new student();

studentOne.getStudentId();

//Task 4

studentOne.greet();

// -----> Activity 4
//Task 5
person.greeting();

//Task 6
// complteted 

//--------> Activity 5
//Task 6
person1.getName();


//Task 7
person1.setName("KRUSHNA",54);

//---------> Activity 5
//Task 8

class Account{

     #balnace = 0;

     deposit(money){

        this.#balnace += money;
        console.log(`Balance : ${this.#balnace}`);
     }

     withdraw(money){

        if(this.#balnace < money){

            console.log(`inSufiicent money ${this.#balnace}`)
        }else{

            this.#balnace -= money;
            console.log(`balanace : ${this.#balnace}`);
        }

     }
}


// Task 10 


let acc1 = new Account();

acc1.deposit(1000);

acc1.withdraw(1000);

acc1.deposit(50);

acc1.withdraw(100);








