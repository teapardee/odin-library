let myLibrary = [];

function Book(title, author, pageCount, read) {
  this.title = title;
  this.author = author;
  this.pageCount = pageCount;
  this.read = read;

  this.info = function () {
    return `${title} by ${author} , ${pageCount} pages, ${read}`;
  };
}

function addBookToLibrary() {}

const theHobbit = new Book(
  'The Hobbit',
  'J.R.R. Tolkien',
  '295',
  'not read yet'
);

console.log(theHobbit.info());
