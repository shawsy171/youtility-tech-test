
interface ListProps<T> {
  items: T[]
  children: (item: T, index?: number) => React.ReactNode
}
interface IdObj {
  id: string | number
}

const List = <T extends IdObj>({ items, children }: ListProps<T>) => {
  return (
    <ul className="">
      {items.map((item, index) => (
        <li key={item.id}>{children(item, index)}</li>
      ))}
    </ul>
  )
}

export default List