import { youtilityAPI } from '@services/api'
import { IBook } from '../types';

export const fetchBooks = async (libraryId: string): Promise<IBook[]> => {
  const response = await youtilityAPI.get(`libraries/${libraryId}/books`, {
    headers: { 'accept': 'application/json' }
  });

  console.log(response)

  return await response.data;
}

export const postBook = async (book: IBook, libraryId: string): Promise<IBook[]> => {
  const headers = { 
    'accept': 'text/plain',
    'Content-Type': 'application/json'
  }
  const response = await youtilityAPI.post(`libraries/${libraryId}/books`, book, { headers });

  console.log(response)

  return await response.data;
}