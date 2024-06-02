import Book from './book.js'
class Library {
    books = [];
    addBook(title, author, pages) {
        newBook = new Book(title, author, pages);
        this.books.push(newBook);
    }
    totalBooks() {
        return books.lenght;
    }
}
export default Library;
