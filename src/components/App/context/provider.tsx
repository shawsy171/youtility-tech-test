import React from "react";
import AppContext from ".";
import useCreateLibrary from '../../../features/Library/hooks/useCreateLibrary'; 

export default ({ children}: { children: React.ReactNode }) => {
  const { loading, error, data, create } = useCreateLibrary()
  
  // console.log({data})

  return (
    <AppContext.Provider value={{ libraries: data, createLibrary: create }}> 
      {children}
    </AppContext.Provider>
  );
};
