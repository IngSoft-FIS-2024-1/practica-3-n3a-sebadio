class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }

  getTitle() {
    return this.title;
  }

  getAuthor() {
    return this.author;
  }

  getPages() {
    return this.pages;
  }
}

export default Book;
