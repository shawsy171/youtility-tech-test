import { useContext } from 'react';
import List from '../../components/List'
import AppContext from "../../components/App/context";
import { ILibrary } from './types';

const createListItem = (onClick: (libraryId: string) => void) => {

  return (item: ILibrary, index?: number) => (
    <>
      <span>Library {index != null && index+1}:  </span>
      <button 
        onClick={() => onClick(item.id)}
        className="p-3 hover:bg-blue-600 hover:text-blue-200">{item.id}
      </button>
    </>
  )
}

export const Library = () => {
  const appCtx = useContext(AppContext)

  return (
    <div  className="bg-green-400 w-1/4">
      <button 
        className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
        onClick={appCtx.createLibrary}
      >
        Create new Library
      </button>
      <div>
        <List items={appCtx.libraries} >
          {createListItem(appCtx.getBooks)}
        </List>
      </div>
    </div>
  )
}
