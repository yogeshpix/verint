const OrderSummary = ({ selectedItem }) => {
  return (
    <table className='padding-1'>
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
