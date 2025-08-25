import { useEffect, useState } from 'react';

import { WARDS_API } from '../constant';

export const useGetWards = districtCode => {
  const [wards, setWards] = useState([]);

  const fetchWards = async districtCode => {
    try {
      const res = await fetch(WARDS_API(districtCode));

      const data = await res.json();

      setWards(data.wards);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (!districtCode) {
      setWards([]);

      return;
    }

    fetchWards(districtCode);
  }, [districtCode]);

  return { wards };
};
