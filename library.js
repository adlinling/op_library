const myLibrary = [];

function Book(title, author) {

  // the constructor...
  this.title = title;
  this.author = author;
  this.id = crypto.randomUUID();

}

function addBookToLibrary(title, author, library) {
  // take params, create a book then store it in the array
  let book = new Book(title, author);

  library.push(book);

  return library;

}






