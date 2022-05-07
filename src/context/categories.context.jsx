import { createContext, useState } from "react";

export const CategoriesContext = createContext({
  categories: [],
});

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const value = { categories };
  return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>;
};
