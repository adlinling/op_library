let myLibrary = [];

function Book(title, author, read) {

  // the constructor...
  this.title = title;
  this.author = author;
  this.read = read;
  this.id = crypto.randomUUID();
}


Book.prototype.toggleReadStatus = function() {
  console.log(`Current read status: ${this.read}`);
  this.read = (this.read)?0:1;
  console.log(`New read status: ${this.read}`);
};


function addBookToLibrary(title, author, read, library) {
  // take params, create a book then store it in the array
  let book = new Book(title, author, read);

  library.push(book);

}



function toggleReadStatus(id){

    //console.log("Toggle status for book id: " + id);
    for (let i in myLibrary) {

      if(myLibrary[i].id == id){
          console.log("Toggle read status for book " + myLibrary[i].title);
          myLibrary[i].toggleReadStatus();
      }
      
    }

    listbooks(myLibrary);
}

function removeBookFromLibrary(id){

    let newLibrary = [];

    console.log(myLibrary);
    console.log("Book with this id will be removed:" + id);


    newLibrary = myLibrary.filter(book => book.id !== id);
    //Alternative way is to use a "for in" loop to create a new array
    /*
    for (let i in myLibrary) {
        console.log(myLibrary[i].id);
        if(myLibrary[i].id !== id){
          newLibrary.push(myLibrary[i]);
        }

    }*/

    myLibrary = newLibrary;

    listbooks(myLibrary);

}

function listbooks(library){

  let infostring = "";
  let readclass = "";

  for (let i in library) {

      
      console.log(library[i]);

      if(library[i].read == 0){
        readclass = "unreadsymbol";
      }

      
      if(library[i].read == 1){
        readclass = "readsymbol";
      }

      //Step 5 of the assignment suggested using data attributes:  https://developer.mozilla.org/en-US/docs/Web/HTML/How_to/Use_data_attributes
      infostring += "<div class='book'><div class='removediv' ><div class='remove' title='Remove' id='" + library[i].id + "' onclick='removeBookFromLibrary(this.id);'>&times;</div></div><div class='title'>" + library[i].title + "</div> <div class='author'>by<br><br>" + library[i].author + "</div><div class='readstatus' data-bookid='" + library[i].id + "' onclick='toggleReadStatus(this.dataset.bookid);'><div class='"+ readclass + "' title='Change read status'></div></div></div>";
      
  }

  shelf.innerHTML = infostring;

}


addBookToLibrary("1984", "George Orwell", 0, myLibrary);
addBookToLibrary("The Client", "John Gresham", 0, myLibrary);
addBookToLibrary("Fahrenheit 451", "Ray Bradbury", 0, myLibrary);
addBookToLibrary("Lord of the Flies", "William Golding", 0, myLibrary);
addBookToLibrary("Pride and Prejudice", "Jane Austin", 0, myLibrary);
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 0, myLibrary);
addBookToLibrary("Treasure Island", "Robert Louis Stevenson", 0, myLibrary);
addBookToLibrary("Great Expectations", "Charles Dickens", 0, myLibrary);
addBookToLibrary("Moby Dick", "Herman Melville", 0, myLibrary);




