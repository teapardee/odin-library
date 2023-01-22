const addButton = document.querySelector('.add-btn');
addButton.addEventListener('click', addBookToLibrary);

const closeButton = document.querySelector('.close-btn');
closeButton.addEventListener('click', () => {
  document.getElementById('modal').style.display = 'none';
});

let myLibrary = [
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    pageCount: '295',
    read: false,
  },
];

function Book(title, author, pageCount, read) {
  this.title = title;
  this.author = author;
  this.pageCount = pageCount;
  this.read = read;

  this.info = function () {
    return `${title} by ${author} , ${pageCount} pages, ${read}`;
  };
}

function addBookToLibrary() {
  document.getElementById('modal').style.display = 'flex';
  newbook = new Book();
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295', 'N');

console.log(theHobbit.info());

var table = document.querySelector('.main-container');

for (i = 0; i < 1; i++) {
  var tableRow = document.createElement('tr');

  var cellTitle = document.createElement('td');
  var cellAuthor = document.createElement('td');
  var cellPageCount = document.createElement('td');
  var cellRead = document.createElement('td');

  cellTitle.innerHTML = `${myLibrary[i].title}`;
  cellAuthor.innerHTML = `${myLibrary[i].author}`;
  cellPageCount.innerHTML = `${myLibrary[i].pageCount} pages`;
  cellRead.innerHTML = myLibrary[i].read ? 'Yes' : 'No';

  table.appendChild(tableRow);
  tableRow.appendChild(cellTitle);
  tableRow.appendChild(cellAuthor);
  tableRow.appendChild(cellPageCount);
  tableRow.appendChild(cellRead);
}
