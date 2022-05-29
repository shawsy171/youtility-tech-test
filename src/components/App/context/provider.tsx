import React from "react";
import AppContext from ".";
import useLibrary from '../../../features/Library/hooks/useLibrary'; 
import useBooks from "../../../features/Books/hooks/useBooks";

export default ({ children}: { children: React.ReactNode }) => {
  const { loading, error, data, create, currentLib, setCurrentLib } = useLibrary()
  const { books, getLibBooks, postBookToLib } = useBooks()

  return (
    <AppContext.Provider value={{ 
        libraries: data, 
        createLibrary: create,
        getBooks: (library) => {
          getLibBooks(library)
          setCurrentLib(library)
        },
        postBookToLib,
        books,
        currentLib
      }}> 
      {children}
    </AppContext.Provider>
  );
};
