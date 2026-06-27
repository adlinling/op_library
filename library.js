const myLibrary = [];

function Book(title, author) {

  // the constructor...
  this.title = title;
  this.author = author;
  this.id = crypto.randomUUID();

}

function addBookToLibrary(title, author) {
  // take params, create a book then store it in the array
  let book = new Book(title, author);

  return book;

}


myLibrary.push(addBookToLibrary("1984", "George Orwell"));
myLibrary.push(addBookToLibrary("The Client", "John Gresham"));
myLibrary.push(addBookToLibrary("Ferenheight 451", "Ray Bradbury"));
myLibrary.push(addBookToLibrary("Lord of the Flies", "Somebody IcantRemember"));

console.log(myLibrary);



