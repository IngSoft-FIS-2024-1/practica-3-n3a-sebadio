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

loadInventory(myLibrary.books[0]);
