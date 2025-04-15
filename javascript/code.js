
let bookArr = [];

let arrCounter = 0;



//This is an extension from the previous lesson's book constructor exercise
function Book(title, author, pages, read) {
    if(!new.target){
        throw Error("PLEASE USE NEW WHEN USING CONSTRUCTOR");
    }
    
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    //Books should have a unique id which we can generate with crypto.randomUUID()
    this.bookID = crypto.randomUUID();
}

Book.prototype.info = function () {
    return `Title: ${this.title} | Author: ${this.author} | Pages: ${this.pages} | Read before? ${this.read}`;
};

function createBookThenAdd(title, author, pages, read) {
    /*
    Separate function to create new book object instances and add
    them to the book array.
    */
    let tempBook = new Book(title, author, pages, read);
    bookArr.push(tempBook);
}

//A function that loops through book array and displays books in HTML table
const table = document.querySelector("table");

function displayAllBooks() {
    //Create tabular data and append it to the newly created table row (tr)
    for (let i = 0 + arrCounter; i < bookArr.length; i++) {
        /*
        Note to self, do NOT confuse for loop "of" and "in". "in" is for 
        iterating through key item pair elements like properties in an object.
        "of" is the main one I should use because it iterates through the objects
        like strings, objects, etc.
        */
        const newRow = document.createElement("tr");
        const tdTitle = document.createElement("td");
        const tdAuthor = document.createElement("td");
        const tdPages = document.createElement("td");
        const tdRead = document.createElement("td");
        const tdBookID = document.createElement("td");

        tdTitle.textContent = bookArr[i].title;
        tdAuthor.textContent = bookArr[i].author;
        tdPages.textContent = bookArr[i].pages.toString(); //Because pages is a number
        tdRead.textContent = bookArr[i].read;
        tdBookID.textContent = bookArr[i].bookID;

        newRow.appendChild(tdTitle);
        newRow.appendChild(tdAuthor);
        newRow.appendChild(tdPages);
        newRow.appendChild(tdRead);
        newRow.appendChild(tdBookID);

        table.appendChild(newRow);
    }

    arrCounter += 1;
}

/*
Make the new book button open the modal
The cancel button should close the modal
*/
const modal = document.querySelector("dialog");
const newBookButton = document.querySelector(".new-book");
const cancelButton = document.querySelector(".cancel-button");

newBookButton.addEventListener("click", function(){
    form.reset();
    modal.showModal();
});

cancelButton.addEventListener("click", function() {
    modal.close();
});

/*
Prevent submit form event from happening with .preventDefault()
and handle the "submit" event ourselves
*/

const form = document.querySelector("form");

//The submit event happens on the form itself, NOT the button

form.addEventListener("submit", function(event){
    event.preventDefault(); //Stops the submit event from happening
    const bookData = new FormData(form);
    /*Using the FormData object and giving it the 
    HTML form will make an object that holds all the form values from 
    the HTML form.
    */
    createBookThenAdd(bookData.get("title"), bookData.get("author"), bookData.get("num-pages"), bookData.get("yesOrno"));
    displayAllBooks();
    modal.close();

});


