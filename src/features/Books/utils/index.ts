import { IBook, IBookWithID } from "../types"

export const addIdToBook = (list: IBook[]): IBookWithID[]  => {
  return list.map((item) => ({...item, id: item.isbn }))
}

export const addIdToAuthor = (list: string[]): { id: number, author: string}[]  => {
  return list.map((author, index) => ({ author, id: index }))
}