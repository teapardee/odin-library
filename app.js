// Form DOM Elements

let $titleInput = document.getElementById('form-title');
let $authorInput = document.getElementById('form-author');
let $pageCountInput = document.getElementById('form-pageCount');
let $readInput = document.getElementById('form-read');
let $form = document.getElementById('form');
let $modal = document.getElementById('modal');
let $submitButton = document.querySelector('.submit-btn');
let $closeButton = document.querySelector('.close-btn');
let $addButton = document.querySelector('.add-btn');

// On Load

window.onload = function () {
  $addButton.addEventListener('click', () => {
    toggleModal('Show');
  });

  $closeButton.addEventListener('click', () => {
    toggleModal('Hide');
  });

  $submitButton.addEventListener('click', addBookToLibrary);

  renderBooks();
};

// Display Books

function renderBooks() {
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

    // Create Edit Buttons
    editBtn.src = './assets/Edit.svg';
    editBtn.alt = 'edit.svg';
    editBtn.className = '.edit-btn';
    editBtn.dataset.indexNumber = i;
    editBtn.addEventListener('click', (e) => {
      editBook(e.currentTarget.getAttribute('data-index-number'));
    });

    //Create Delete Buttons
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
}

// Toggle Modal

function toggleModal(action) {
  if (action === 'Show') {
    $modal.style.display = 'flex';
  } else {
    $modal.style.display = 'none';
  }
}

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
  let title = inpu;
  newbook = new Book();
}

// Edit Book

function editBook(indexValue) {
  document.getElementById('modal').style.display = 'flex';
  console.log(indexValue);
  $titleInput.value = myLibrary[indexValue].title;
  $authorInput.value = myLibrary[indexValue].author;
  $pageCountInput.value = myLibrary[indexValue].pageCount;
  $readInput.checked = myLibrary[indexValue].read;
  $submitButton.innerHTML = 'Update Book';
}

function deleteBook(buttonID) {
  console.log('test');
  //   const bookForm = document.getElementById('form')
  //   const titleInput = bookForm.getElementById('title')
  // titleInput.value =
}
