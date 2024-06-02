import Library from './library.js';

const inpTotalBooks = document.getElementById('inp-total-books');
const btnAdd = document.getElementById('btn-add');
const inpTitle = document.getElementById('inp-title');
const inpAuthor = document.getElementById('inp-author');
const inpPages = document.getElementById('inp-pages');

const myLibrary = new Library('Montevideo');

function updateTotalBooks() {
  inpTotalBooks.value = myLibrary.totalBooks();
}

function loadInventory() {
  const emptyBookList = document.getElementById("empty-book-list");
  const bookListContainer = document.getElementById("book-list-container");
  const bookList = document.getElementById("book-list");

  emptyBookList.classList.add('d-none');
  bookListContainer.classList.remove("d-none");

  myLibrary.inventory.forEach(book => {
    let newListElement = document.createElement("li");
    newListElement.classList.add("list-group-item");
    newListElement.innerText = book.toString();
    bookList.appendChild(newListElement);
  });
}

function updateInventory() {
  const emptyBookList = document.getElementById("empty-book-list");
  const bookListContainer = document.getElementById("book-list-container");
  const bookList = document.getElementById("book-list");

  emptyBookList.classList.add('d-none');
  bookListContainer.classList.remove("d-none");

  const addedBook = myLibrary.inventory.pop();
  let newListElement = document.createElement("li");
  newListElement.classList.add("list-group-item");
  newListElement.innerText = addedBook.toString();
  bookList.appendChild(newListElement);
}

btnAdd.addEventListener('click', () => {
  const bookErrorContainer = document.getElementById("add-book-error");
  const bookError = document.getElementById("add-book-error-msg");
  try {
    myLibrary.addBook(inpTitle.value, inpAuthor.value, parseInt(inpPages.value));
    clearInputs();
    bookErrorContainer.classList.add("d-none");
    updateInventory();
    updateTotalBooks();
  }
  catch (error) {
    bookErrorContainer.classList.remove("d-none");
    bookError.innerText = error;
  }
});

function clearInputs() {
  inpTitle.value = "";
  inpAuthor.value = "";
  inpPages.value = "";
}

updateTotalBooks();