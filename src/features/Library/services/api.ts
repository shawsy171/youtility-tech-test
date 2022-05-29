import { youtilityAPI } from '@services/api'
import { ILibrary } from '../types';

export const createLibrary = async (): Promise<ILibrary> => {
  const response = await youtilityAPI.post('libraries', {
    headers: { 'accept': 'text/plain' }
  });

  // console.log(response)

  return await response.data;
}

