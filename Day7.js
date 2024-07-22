// Objects

//Activity 1 : object creation and Access
//Task 1
let book = {

    title : "The story",
    author : "unknown",
    year : 1992,

    myMethod : function(){
      console.log(`${this.title} book is Writen by ${this.author}`);
    }
,
    updateYear: function(year){
        this.year = year;
    }
}

console.log(book);

//Task 2
console.log(book.title,",", book.author);

//Activtiy 2 : Object methods
//Task 3
book.myMethod();

//Task 4
book.updateYear(2002);
console.log(book.year);

//Activity 3 : Nested Objects
//Task 5
const library = {
  lib_name: "City Library",
  books: [
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      year: 1960,
    },
    {
      title: "The 1984 ",
      author: "George Orwell",
      year: 1949,
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      year: 1925,
    },
  ],
};

console.log(library);

//Done


//Task 6
// Log the name of the library
console.log("Library Name:", library.name);

// Log the titles of all the books in the library
console.log("Book Titles:");
library.books.forEach(book => {
    console.log(book.title);
});




