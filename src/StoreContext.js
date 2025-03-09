import { createContext, useState, useEffect } from 'react';
import { generateItems } from './utils/generateItems';

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [storeItem, setStoreItem] = useState([]);
  useEffect(() => {
    const sortedItems = generateItems(20).sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setStoreItem(sortedItems);
  }, []);
  return (
    <StoreContext.Provider value={{ storeItem, setStoreItem }}>
      {children}
    </StoreContext.Provider>
  );
};
