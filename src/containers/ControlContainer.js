import Button from '../components/Button';
import Input from '../components/Input';

const ControlContainer = ({
  searchStr,
  onSearchChange,
  onSortByName,
  onSortByPrice,
  activeSort,
}) => (
  <div className='controls'>
    <Input
      value={searchStr}
      onChange={(e) => onSearchChange(e.target.value)}
      type={'text'}
      placeholder={'Search by name...'}
    />
    <Button
      onClick={onSortByName}
      variant={activeSort ? 'secondary' : 'primary'}
    >
      Sort by Name
    </Button>
    <Button
      onClick={onSortByPrice}
      variant={activeSort ? 'primary' : 'secondary'}
    >
      Sort by Price
    </Button>
  </div>
);
export default ControlContainer;
