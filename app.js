// Event Listeners
const addButton = document.querySelector('.add-btn');
addButton.addEventListener('click', addBookToLibrary);

const closeButton = document.querySelector('.close-btn');
closeButton.addEventListener('click', () => {
  document.getElementById('modal').style.display = 'none';
});

// const deleteButton = document.querySelector('.delete-btn');
// deleteButton.addEventListener('click', deleteBook());

// Library

let myLibrary = [
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    pageCount: '295',
    read: false,
  },
  {
    title: 'Rework',
    author: 'Jason Fried',
    pageCount: '186',
    read: true,
  },
];

// Adding Books to Library

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

// Display Books

var table = document.querySelector('.main-container');

for (i = 0; i < myLibrary.length; i++) {
  var tableRow = document.createElement('tr');

  var cellTitle = document.createElement('td');
  var cellAuthor = document.createElement('td');
  var cellPageCount = document.createElement('td');
  var cellRead = document.createElement('td');
  var editBtn = document.createElement('img');
  var deleteBtn = document.createElement('img');

  cellTitle.innerHTML = `${myLibrary[i].title}`;
  cellAuthor.innerHTML = `${myLibrary[i].author}`;
  cellPageCount.innerHTML = `${myLibrary[i].pageCount} pages`;
  cellRead.innerHTML = myLibrary[i].read ? 'Yes' : 'No';

  editBtn.src = './assets/Edit.svg';
  editBtn.alt = 'edit.svg';
  editBtn.className = '.edit-btn';
  editBtn.dataset.indexNumber = i;
  editBtn.addEventListener('click', (e) => {
    editBook(e.currentTarget.getAttribute('data-index-number'));
  });

  deleteBtn.src = './assets/Delete.svg';
  deleteBtn.alt = 'delete.svg';
  deleteBtn.className = '.delete-btn';
  deleteBtn.dataset.indexNumber = i;
  deleteBtn.addEventListener('click', deleteBook);

  table.appendChild(tableRow);
  tableRow.appendChild(cellTitle);
  tableRow.appendChild(cellAuthor);
  tableRow.appendChild(cellPageCount);
  tableRow.appendChild(cellRead);
  tableRow.appendChild(editBtn);
  tableRow.appendChild(deleteBtn);
}

// Edit Book

function editBook(indexValue) {
  document.getElementById('modal').style.display = 'flex';
  console.log(indexValue);
  document.getElementById('form-title').value = myLibrary[indexValue].title;
  document.getElementById('form-author').value = myLibrary[indexValue].author;
  document.getElementById('form-pageCount').value =
    myLibrary[indexValue].pageCount;
  document.getElementById('form-read').checked = myLibrary[indexValue].read;

  // titleInput.value = buttonID;
}

function deleteBook(buttonID) {
  console.log('test');
  //   const bookForm = document.getElementById('form')
  //   const titleInput = bookForm.getElementById('title')
  // titleInput.value =
}
