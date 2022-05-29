import React, { useContext } from 'react'
import AppContext from '@components/App/context'
import List from '@components/List'
import { IBook, IBookWithID } from './types'
import Form from './components/Form';
import Book from './components/Book';
import { addIdToBook } from './utils'


const book = (item: IBookWithID) => {
  return (<Book item={item} />)
}

const Books = () => {
  const { books } = useContext(AppContext)
  
  return (
    <div className="w-3/4">
      <div>Books</div>
      <Form />
      <List items={addIdToBook(books)} >
        {book}
      </List>
    </div>
  )
}

export default Books