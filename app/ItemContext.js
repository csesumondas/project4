"use client";
import { createContext, useContext, useState } from "react";
const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
  const [item, setItem] = useState([]);

  return (
    <ItemContext.Provider value={{ item, setItem }}>
      {children}
    </ItemContext.Provider>
  );
};

export const useItemContext = () => useContext(ItemContext);
