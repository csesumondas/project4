"use client";
import { createContext, useContext, useState } from "react";
const ItemContext = createContext();
import { data } from "./Components/Items";

export const ItemProvider = ({ children }) => {
  const [itemCount, setItemCount] = useState(0);
  const [item, setItem] = useState([]);

  return (
    <ItemContext.Provider
      value={{ itemCount, setItemCount, item, setItem, data }}
    >
      {children}
    </ItemContext.Provider>
  );
};

export const useItemContext = () => useContext(ItemContext);
