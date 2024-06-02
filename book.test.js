import Book from './book.js';

describe('Book', () => {
  let myBook;

  beforeEach(() => {
    myBook = new Book('Cuentos de la Selva', 'Horacio Quiroga', 350);
  });

  it('should return the correct title', () => {
    expect(myBook.getTitle()).toBe('Cuentos de la Selva');
  });

  it('should return the correct author', () => {
    expect(myBook.getAuthor()).toBe('Horacio Quiroga');
  });

  it('should return the correct number of pages', () => {
    expect(myBook.getPages()).toBe(350);
  });

  it('should check title is a string', () => {
    expect(() => myBook = new Book(451, 1, 350)).toThrow();
  });

  it('should check title is not empty', () => {
    expect(() => myBook = new Book('', 'Horacio Quiroga', 350)).toThrow();
  });

  it('should check author is a string', () => {
    expect(() => myBook = new Book('Cuentos de la Selva', 1, 350)).toThrow();
  });

  it('should check page param is a number', () => {
    expect(() => myBook = new Book('Cuentos de la Selva', 'Horacio Quiroga', '350')).toThrow();
  });

  it('should check pages not < 1', () => {
    expect(() => myBook = new Book('Cuentos de la Selva', 'Horacio Quiroga', 0)).toThrow();
  });
});
