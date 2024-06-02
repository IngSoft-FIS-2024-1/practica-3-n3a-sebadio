import Book from './book.js'
class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }
    setName(name) {
        if (typeof (name) !== 'string') {
            throw new Error();
        }
        name = name.trim();
        if (name.length === 0) {
            throw new Error();
        }
        this.name = name;
    }
    getName() {
        return this.name;
    }
    addBook(title, author, pages) {
        const newBook = new Book(title, author, pages);
        this.books.push(newBook);
    }
    totalBooks() {
        return this.books.lenght;
    }
}
export default Library;
