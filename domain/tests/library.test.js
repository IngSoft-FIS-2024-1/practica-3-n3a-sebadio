import Library from '../library.js';
import Book from '../book.js';

describe('Library', () => {
  let myLibrary;

  beforeEach(() => {
    myLibrary = new Library();
  });

  it('should add a book to the library', () => {
    myLibrary.addBook('Cuentos de la Selva', 'Horacio Quiroga', 120);
    const aBook = myLibrary.inventory[myLibrary.inventory.length - 1];
    expect(aBook).toBeInstanceOf(Book);
    expect(aBook.getTitle()).toBe('Cuentos de la Selva');
  });

  it('should return the total number of books', () => {
    myLibrary.addBook('Cuentos de la Selva', 'Horacio Quiroga', 120);
    myLibrary.addBook('El Hombre que Calculaba', 'Malba Tahan', 286);
    expect(myLibrary.totalBooks()).toBe(2);
  });

  it('should set the name of the library', () => {
    myLibrary.setName('Montevideo');
    expect(myLibrary.getName()).toBe('Montevideo');
  });
  
  it('should throw an error when setting an invalid name', () => {
    expect(() => myLibrary.setName('')).toThrow();
    expect(() => myLibrary.setName(123)).toThrow();
  });
  
});