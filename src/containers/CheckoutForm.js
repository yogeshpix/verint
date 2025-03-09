import { useState, useCallback } from 'react';
import { formatNumber } from '../utils/formatNumber';
import { validateForm } from '../utils/validateForm';
import Input from '../components/Input';
import Button from '../components/Button';

const CheckoutForm = ({ itemId, navigate }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    card: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    card: '',
  });

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const validate = useCallback(() => validateForm(form, setErrors), [form]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      navigate(
        `/confirmation/${(itemId * Math.random() * 20 + 1).toFixed(
          0
        )}/${itemId}`
      );
    }
  };

  return (
    <form onSubmit={handleSubmit} className='form-container text-center'>
      <fieldset style={{ padding: '1rem' }}>
        <legend>Billing Details</legend>
        <Input
          value={form.name}
          onChange={(e) => handleChange('name', e.target.value)}
          type='text'
          placeholder='Full Name'
          error={errors.name}
          className='formInput'
        />
        <Input
          value={form.email}
          onChange={(e) => handleChange('email', e.target.value)}
          type='email'
          placeholder='Email'
          error={errors.email}
          className='formInput'
        />
        <Input
          value={form.phone}
          onChange={(e) => handleChange('phone', formatNumber(e.target.value))}
          type='text'
          placeholder='Phone (XXX-XXX-XXXX)'
          error={errors.phone}
          className='formInput'
          maxLength='12'
        />
        <Input
          value={form.card}
          onChange={(e) =>
            handleChange('card', formatNumber(e.target.value, true))
          }
          type='text'
          placeholder='Credit Card (19 digits)'
          error={errors.card}
          className='formInput'
          maxLength='19'
        />
        <Button type='submit' size='medium'>
          Submit Order
        </Button>
      </fieldset>
    </form>
  );
};

export default CheckoutForm;
