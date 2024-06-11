import Book from './book.js';

class Library {

  #name;
  /**
   * @type {Book[]}
   */
  #inventory = [];

  constructor(name) {
    this.setName(name);
  }

  setName(name) {
    if (typeof (name) !== 'string') {
      throw new Error();
    }
    name = name.trim();
    if (name.length === 0) {
      throw new Error();
    }
    this.#name = name;
  }

  getName() {
    return this.#name;
  }

  addBook(title, author, pages, words = 0) {
    const newBook = new Book(title, author, pages, words);
    this.#inventory.push(newBook);
  }

  getInventory() {
    return this.#inventory;
  }

  totalBooks() {
    return this.#inventory.length;
  }

  totalWords() {
    let total = 0;
    for (const book of this.getInventory()) {
      total += book.getWords();
    }
    return total;
  }
}

export default Library;
