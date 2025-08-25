import { useEffect, useState } from 'react';

import { GET_BRANDS_API } from '../constant';

export const useGetBrands = () => {
  const [brands, setBrands] = useState([]);

  const fetchBrands = async () => {
    try {
      const response = await fetch(GET_BRANDS_API);

      if (!response.ok) throw new Error('Failed to fetch brands');

      const data = await response.json();

      const brandList = Object.values(data);

      setBrands(brandList);
    } catch (err) {
      console.error('Error fetching brands:', err);
    }
  };

  useEffect(() => {
    fetchBrands();
  }, []);

  return { brands };
};
