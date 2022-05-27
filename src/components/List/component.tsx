interface ListProps {
  items: any[];
}

const List = ({ items }: ListProps) => {
  return (
    <>
      <ul className="divide-y divide-gray-100">
        {items.map((item: any, index) => (
          <li key={item.id}>
            <span>Library {index+1}:  </span><button className="p-3 hover:bg-blue-600 hover:text-blue-200">{item.id}</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default List