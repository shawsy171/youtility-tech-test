import { createContext } from "react";
import { ILibrary } from "../../../features/Library/types";
import { IBook } from "../../../features/Books/types";
interface AppContextDefault {
  libraries: ILibrary[]
  createLibrary: () => Promise<void>
  books: IBook[]
  getBooks: (libraryId: string) => void
  currentLib: string
  postBookToLib: (book: IBook, libraryId: string) => void
}

export default createContext<AppContextDefault>({
  libraries: [],
  createLibrary: () => Promise.resolve(),
  getBooks: () => {},
  books: [],
  currentLib: '',
  postBookToLib: () => {}
});