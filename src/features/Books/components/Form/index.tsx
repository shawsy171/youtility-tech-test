import { useRef, useState, useContext } from 'react'
import AppContext from '@components/App/context'

const Form = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const [authorCount, setAuthorCount] = useState([null])
  const appCtx = useContext(AppContext)

  const removeAuthor = () => {
    if(authorCount.length > 1) setAuthorCount(authorCount.slice(0, authorCount.length - 1))
  }

  return (
    <form
        ref={formRef}
        onSubmit={(e) => {
          e.preventDefault()
          const data = new FormData(formRef.current || undefined);
          
          const newBook = {
            isbn: '',
            title: '',
            authors: []
          }

          for(const [key, value] of data.entries()) {
            console.log(key,': ', value);
            if(key.startsWith('author')) {
              // @ts-ignore:next-line
              newBook.authors.push(value)
            } else {
              // @ts-ignore:next-line
              newBook[key] = value
            }
          }

          appCtx.postBookToLib(newBook, appCtx.currentLib)
        }}
      >
        <p>Lib {appCtx.currentLib}</p>
        <label htmlFor="isbn">ISBN</label>
        <input type="number" name="isbn" required/>
        <br />
        <label htmlFor="title">Title</label>
        <input type="text" name="title" required/>
        <br />
        {authorCount.map((_, index) => {
          return (
            <div key={index}>
              <label htmlFor="authors">Author</label>
              <input type="text" name={`authors${index+1}`} required/>
            </div>
          )
        })}
        <button 
          className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded"
          type="button"
          onClick={() => setAuthorCount(authorCount.concat(null))}
        >
          Add Author
        </button>
        <button 
          className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded"
          type="button"
          onClick={removeAuthor}
        >
          Remove Author
        </button>
        <br />
        <button 
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          type="submit"
        >
          Add Book
        </button>
      </form>
  )
}

export default Form