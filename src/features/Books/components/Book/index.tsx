import { IBookWithID } from '../../types'

interface BookProps {
  item: IBookWithID
}

const Book = ({item}: BookProps) => {
  return (
    <div className="p-2 bg-slate-100 border-b-4 b-none bottom-1 border-b-slate-500 rounded mb-4">
      <p>{item.isbn}</p>
      <p>{item.title}</p>
      <p>{item.authors.join(', ')}</p>
    </div>
  )
}

export default Book