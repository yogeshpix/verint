const OrderSummary = ({ selectedItem }) => {
  return (
    <table style={{ padding: '1rem' }}>
      <thead>
        <tr>
          <th scope='col'>Name</th>
          <th scope='col'>Description</th>
          <th scope='col'>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{selectedItem?.name}</td>
          <td>{selectedItem?.description}</td>
          <td>
            <strong>{selectedItem?.actualPrice}</strong>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default OrderSummary;
