import { useState } from 'react';
import { createLibrary } from '../services/api';
import { Library } from '../types'

const useCreateLibrary = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState<Library[]>([]);

  const create = async () => {
    setLoading(true);
    try {
      const library = await createLibrary();
      setData((prev: Library[]) => [...prev, library]);
    } catch (err) {
      setError(true);
    }
    setLoading(false);
  };

  return { loading, error, data, create };
}

export default useCreateLibrary
