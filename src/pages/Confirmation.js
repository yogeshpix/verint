import React, { useContext, useMemo } from 'react';
import Container from '../containers/Container';
import { StoreContext } from '../StoreContext';
import Button from '../components/Button';

const Confirmation = ({ orderId, navigate, itemId }) => {
  const { storeItem } = useContext(StoreContext);
  const selectedItem = useMemo(
    () => storeItem.find((item) => item.id === Number(itemId)),
    [storeItem, itemId]
  );
  return (
    <Container textAlign='text-center'>
      <h2 className='pageheader'>Order Summary</h2>
      <div className='borderBox'>
        <p className='padding-bottom-1'>
          Successfully order <strong>{selectedItem?.name}</strong> and your
          order number is <strong>{orderId}</strong> and
          <strong> ${selectedItem?.actualPrice}</strong> charged to the credit
          card
        </p>
        <Button type='button' size='medium' onClick={() => navigate(`/`)}>
          Back to Home
        </Button>
      </div>
    </Container>
  );
};

export default Confirmation;
