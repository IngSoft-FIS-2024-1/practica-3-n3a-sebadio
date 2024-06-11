import {describe, it, expect, beforeEach} from '@jest/globals';
import Book from '../book.js';

describe('Book', () => {
  /**
   * @type {Book}
   */
  let myBook;

  beforeEach(() => {
    myBook = new Book('Cuentos de la Selva', 'Horacio Quiroga', 350);
  });

  it('return the correct title', () => {
    expect(myBook.getTitle()).toBe('Cuentos de la Selva');
  });

  it('return the correct author', () => {
    expect(myBook.getAuthor()).toBe('Horacio Quiroga');
  });

  it('return the correct number of pages', () => {
    expect(myBook.getPages()).toBe(350);
  });

  it('check title is a string', () => {
    expect(() => myBook = new Book(451, 1, 350)).toThrow();
  });

  it('check title is not empty', () => {
    expect(() => myBook = new Book('', 'Horacio Quiroga', 350)).toThrow();
  });

  it('check author is a string', () => {
    expect(()=> typeof myBook.getAuthor === 'string');
  });

  it('setAuthor is not string', () => {
    expect(()=> new Book('Hola', 143, 32) ).toThrow();
  });

  it('if setAuthor is empty, set author to "Anónimo"', () => {
    const author = new Book('Hola', '', 32).getAuthor();
    expect(author).toBe('Anónimo');
  });

  it('setPages param has to be a number', ()=>{
    expect(()=> myBook.setPages('143')).toThrow();
  });

  it('setWords param has to be a number', ()=>{
    expect(()=> myBook.setWords('143')).toThrow();
  });

  it('setWords param cannot be lower than zero', ()=>{
    expect(()=> myBook.setWords(-2)).toThrow();
  });

  it('words per page is calculated correctly', ()=>{
    myBook.setWords(70000);
    const wpp = 70000 / 350;
    const mbWpp = myBook.wordsPerPage();
    expect(mbWpp).toBe(wpp);
  });

  it('check page param is a number', () => {
    expect(()=> typeof myBook.getPages() === 'number');
  });

  it('check pages not < 1', () => {
    expect(()=> new Book('Hola que tal', 'El vecino', -2)).toThrow();
  });

  it('toString()', () => {
    const expectedOutput = `Título: ${myBook.getTitle()} Autor: ${myBook.getAuthor()} Páginas: ${myBook.getPages()} Words: ${myBook.getWords()}`;
    expect(myBook.toString()).toBe(expectedOutput);
  });

});
