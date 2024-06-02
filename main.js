import Library from './library.js';

const myLibrary = new Library('Montevideo');
myLibrary.addBook('Cuentos de la Selva', "Horacio Quiroga", 350);

function loadInventory(newBook) {
  const emptyBookList = document.getElementById("empty-book-list");
  const bookListContainer = document.getElementById("book-list-container");
  const bookList = document.getElementById("book-list");
  
  emptyBookList.classList.add('d-none');
  bookListContainer.classList.remove("d-none");
  let newListElement = document.createElement("li");
  newListElement.classList.add("list-group-item");
  newListElement.innerText = newBook.toString();
  bookList.appendChild(newListElement);
}

const btnAdd = document.getElementById('btn-add');
const inpTitle = document.getElementById('inp-title');
const inpAuthor = document.getElementById('inp-author');
const inpPages = document.getElementById('inp-pages');

btnAdd.addEventListener('click', () => {
  const newBook = new Book(inpTitle.value, inpAuthor.value, inpPages.value);
  const bookErrorContainer = document.getElementById("add-book-error");
  const bookError = document.getElementById("add-book-error-msg");
  try
  {
    myLibrary.addBook(newBook);
    clearInputs();
    countriesErrorContainer.classList.add("d-none");
    loadbookList(newBook);
  }
  catch (error)
  {
    bookErrorContainer.classList.remove("d-none");
    bookError.innerText = error;
  }
});

loadInventory(myLibrary.books[0]);
