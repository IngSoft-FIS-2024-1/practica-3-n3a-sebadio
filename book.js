class Book {
  constructor(title, author, pages) {
    if (typeof (title) !== 'string') {
      throw new Error();
    }
    if (title.trim().length === 0) {
      throw new Error();
    }
    if (typeof (pages) !== 'number' && !isNan(pages)) {
      throw new Error();
    }
    if (pages < 1) {
      throw new Error();
    }
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
