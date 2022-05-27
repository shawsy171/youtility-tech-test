import { youtilityAPI } from '@services/api'
import { Library } from '../types';

export const createLibrary = async (): Promise<Library> => {
  const response = await youtilityAPI.post('libraries');

  // console.log(response)

  return await response.data;
}

