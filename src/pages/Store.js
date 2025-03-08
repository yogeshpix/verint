import React, { useState, useCallback, useMemo, useContext } from 'react';
import Container from '../containers/Container';
import ControlContainer from '../containers/ControlContainer';
import ItemContainer from '../containers/ItemContainer';

import { StoreContext } from '../StoreContext';

const Store = ({ navigate }) => {
  const { storeItem, setStoreItem } = useContext(StoreContext);
  const [searchStr, setSearchStr] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [activeSort, setActiveSort] = useState(false);

  const filteredItems = useMemo(() => {
    return storeItem.filter((item) =>
      item.name.toLowerCase().includes(searchStr.toLowerCase())
    );
  }, [storeItem, searchStr]);

  const sortItems = useCallback(
    (key, isNumeric = false) => {
      setStoreItem((prevItems) =>
        [...prevItems].sort((a, b) =>
          isNumeric
            ? sortOrder === 'asc'
              ? a[key] - b[key]
              : b[key] - a[key]
            : sortOrder === 'asc'
            ? a[key].localeCompare(b[key])
            : b[key].localeCompare(a[key])
        )
      );
      setActiveSort(isNumeric);
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    },
    [sortOrder]
  );
  return (
    <div>
      <Container>
        <ControlContainer
          searchStr={searchStr}
          activeSort={activeSort}
          onSearchChange={setSearchStr}
          onSortByName={() => sortItems('name')}
          onSortByPrice={() => sortItems('actualPrice', true)}
        />
        <ItemContainer
          items={filteredItems}
          activeSort={activeSort}
          navigate={navigate}
        />
      </Container>
    </div>
  );
};

export default React.memo(Store);
