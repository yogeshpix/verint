import Button from '../components/Button';
import PageHeader from './PageHeader';

const ItemContainer = ({ items, navigate }) => (
  <div className='item-container'>
    {items.length > 0 && (
      <table aria-label='Store Items' className='margin-top-1'>
        <thead>
          <tr>
            <th scope='col' style={{ width: '2rem' }}>
              Image
            </th>
            <th scope='col'>Name</th>
            <th scope='col'>Description</th>
            <th scope='col'>Suggested Price</th>
            <th scope='col'>Actual Price</th>
            <th scope='col'>Discount</th>
            <th scope='col'>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>
                <img
                  src={item.image}
                  alt={`Image of ${item.name}`}
                  className='item-image'
                />
              </td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>${item.suggestedPrice}</td>
              <td>${item.actualPrice}</td>
              <td>{item.discount}%</td>
              <td style={{ width: '1rem' }}>
                <Button
                  variant='orange'
                  size='medium'
                  onClick={() => navigate(`/checkout/${item.id}`)}
                >
                  Buy
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
    {items.length === 0 && <PageHeader>Item not found</PageHeader>}
  </div>
);

export default ItemContainer;
