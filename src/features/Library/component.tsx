import { useContext } from 'react';
import List from '../../components/List'
import AppContext from "../../components/App/context";

export const Library = () => {
  const appCtx = useContext(AppContext)

  return (
    <>
      <button 
        className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
        onClick={appCtx.createLibrary}
      >
        Create new Library
      </button>
      
      <List items={appCtx.libraries} />
    </>
  )
}
