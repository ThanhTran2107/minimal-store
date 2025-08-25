import { useEffect, useState } from 'react';

import { DISTRICTS_API } from '../constant';

export const useGetDistricts = provinceCode => {
  const [districts, setDistricts] = useState([]);

  const fetchDistricts = async provinceCode => {
    try {
      const res = await fetch(DISTRICTS_API(provinceCode));

      const data = await res.json();

      setDistricts(data.districts);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (!provinceCode) {
      setDistricts([]);

      return;
    }

    fetchDistricts(provinceCode);
  }, [provinceCode]);

  return { districts };
};
