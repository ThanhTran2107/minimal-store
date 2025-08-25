import { useEffect, useState } from 'react';

import { PROVINCES_API } from '../constant';

export const useGetProvinces = () => {
  const [provinces, setProvinces] = useState([]);

  const fetchProvinces = async () => {
    try {
      const res = await fetch(PROVINCES_API);

      const data = await res.json();

      setProvinces(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchProvinces();
  }, []);

  return { provinces };
};
