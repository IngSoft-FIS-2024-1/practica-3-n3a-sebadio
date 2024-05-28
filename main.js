import Book from './book.js';

const myBook = new Book('Cuentos de la Selva', "Horacio Quiroga", 350);

console.log(`Title: ${myBook.getTitle()}`);
console.log(`Author: ${myBook.getAuthor()}`);
console.log(`Pages: ${myBook.getPages()}`);
