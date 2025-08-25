import { useEffect, useState } from 'react';

import { GET_PRODUCTS_API } from '../constant';

export const useGetProducts = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch(GET_PRODUCTS_API);

      if (!response.ok) throw new Error('Failed to fetch products');

      const data = await response.json();

      const productList = Object.keys(data || {}).map(key => ({
        id: key,
        ...data[key],
      }));

      setProducts(productList);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products };
};
