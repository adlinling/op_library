const myLibrary = [];

function Book(title, author, read) {

  // the constructor...
  this.title = title;
  this.author = author;
  this.read = read;
  this.id = crypto.randomUUID();

}

function addBookToLibrary(title, author, read, library) {
  // take params, create a book then store it in the array
  let book = new Book(title, author, read);

  library.push(book);

}



function listbooks(library){

  let infostring = "";

  for (let i in library) {

      
      console.log(library[i]);

      infostring += "<div class='book'><div class='removediv' ><div class='remove' title='Remove' id='" + library[i].id + "'>&times;</div></div><div class='title'>" + library[i].title + "</div> <div class='author'>by<br><br>" + library[i].author + "</div><div class='bookid'>" + library[i].id + "</div></div>";
      
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




