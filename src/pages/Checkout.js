import { useContext, useMemo } from 'react';
import { StoreContext } from '../StoreContext';
import Container from '../containers/Container';
import OrderSummary from '../containers/OrderSummary';
import CheckoutForm from '../containers/CheckoutForm';

const Checkout = ({ itemId, navigate }) => {
  const { storeItem } = useContext(StoreContext);
  const selectedItem = useMemo(
    () => storeItem.find((item) => item.id === Number(itemId)),
    [storeItem, itemId]
  );

  return (
    <div>
      <Container>
        <h2 className='pageheader'>Checkout</h2>
        <div className='borderBox'>
          <OrderSummary selectedItem={selectedItem} />
          <CheckoutForm itemId={itemId} navigate={navigate} />
        </div>
      </Container>
    </div>
  );
};

export default Checkout;
