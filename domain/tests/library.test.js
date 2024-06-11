import { describe, it, expect, beforeEach } from '@jest/globals';
import Library from '../library.js';
import Book from '../book.js';

describe('Library', () => {
  /**
   * @type {Library}
   */
  let myLibrary;

  beforeEach(() => {
    myLibrary = new Library('Biblioteca');
  });

  it('add a book to the library', () => {
    myLibrary.addBook('Cuentos de la Selva', 'Horacio Quiroga', 120);
    const aBook = myLibrary.getInventory()[myLibrary.getInventory().length - 1];
    expect(aBook).toBeInstanceOf(Book);
    expect(aBook.getTitle()).toBe('Cuentos de la Selva');
  });

  it('return the total number of books', () => {
    myLibrary.addBook('Cuentos de la Selva', 'Horacio Quiroga', 120);
    myLibrary.addBook('El Hombre que Calculaba', 'Malba Tahan', 286);
    expect(myLibrary.totalBooks()).toBe(2);
  });

  it('set the name of the library', () => {
    myLibrary.setName('Montevideo');
    expect(myLibrary.getName()).toBe('Montevideo');
  });

  it('throw an error when setting an invalid name', () => {
    expect(() => myLibrary.setName(123)).toThrow();
  });

  it('throw an error when setting an empty name', () => {
    expect(()=> new Library('')).toThrow();
  });

  it('return the sum of the pages of every book in the library', ()=>{
    myLibrary.addBook('Cuentos de la Selva', 'Horacio Quiroga', 120, 70000);
    myLibrary.addBook('El Hombre que Calculaba', 'Malba Tahan', 286, 143000);
    const expectedOutput = 70000 + 143000;
    const output = myLibrary.totalWords();

    expect(output).toBe(expectedOutput);
  });  

});