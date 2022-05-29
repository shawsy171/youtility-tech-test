export interface IBook {
  isbn: string
  title: string
  authors: string[]
}

export interface IBookWithID extends IBook {
   id: string 
}