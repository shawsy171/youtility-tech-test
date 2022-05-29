import { useState } from 'react';
import { createLibrary } from '../services/api';
import { ILibrary } from '../types'

const useCreateLibrary = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState<ILibrary[]>([]);
  const [currentLib, setCurrentLib] = useState('');

  const create = async () => {
    setLoading(true);
    try {
      const library = await createLibrary();
      setData((prev: ILibrary[]) => [...prev, library]);
    } catch (err) {
      setError(true);
    }
    setLoading(false);
  };

  return { loading, error, data, create, currentLib, setCurrentLib };
}

export default useCreateLibrary
