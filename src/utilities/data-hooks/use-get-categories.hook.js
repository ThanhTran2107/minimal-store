import { useEffect, useState } from "react";
import { GET_CATEGORIES_API } from "../constant";

export const useGetCategories = () => {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const response = await fetch(GET_CATEGORIES_API);

      if (!response.ok) throw new Error("Failed to fetch categories");

      const data = await response.json();

      const categoryList = Object.values(data || {});

      const sortedCategories = [
        "All",
        ...categoryList.filter((item) => item !== "All"),
      ];

      setCategories(sortedCategories);
    } catch (err) {
      console.error("Error fetching categories:", err);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return { categories };
};
