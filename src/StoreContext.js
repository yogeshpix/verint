import { createContext, useState, useEffect } from 'react';
import { generateStoreItems } from './utils/generateStoreItems';

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [storeItem, setStoreItem] = useState([]);
  useEffect(() => {
    const sortedItems = generateStoreItems(20).sort((a, b) =>
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
