import { useState } from "react";
import { fetchBooks, postBook } from "../services/api";
import { IBook } from "../types";

const useBooks = () => {
  const [books, setBooks] = useState<IBook[]>([]);

  const getLibBooks = async (libraryId: string) => {
    const books = await fetchBooks(libraryId);
    
    setBooks(books);
  };

  const postBookToLib = async (book: IBook, libraryId: string) => {
    const books = await postBook(book, libraryId);
    setBooks(books);
  }

  return { books, getLibBooks, postBookToLib };
} 

export default useBooks;
