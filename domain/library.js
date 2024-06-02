import Book from './book.js'

class Library {

    inventory = [];

    constructor(name) {
        this.name = name;
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
        this.inventory.push(newBook);
    }

    totalBooks() {
        return this.inventory.length;
    }

    totalWords() {
        // TODO
    }
}

export default Library;
