export const validateForm = (form, setErrors) => {
  let valid = true;
  let newErrors = { name: '', email: '', phone: '', card: '' };

  if (!/^[A-Za-z ]+$/.test(form.name)) {
    newErrors.name = 'Invalid Name';
    valid = false;
  }
  if (!/\S+@\S+\.\S+/.test(form.email)) {
    newErrors.email = 'Invalid Email';
    valid = false;
  }
  if (!/^\d{3}-\d{3}-\d{4}$/.test(form.phone)) {
    newErrors.phone = 'Phone must be XXX-XXX-XXXX';
    valid = false;
  }
  if (!/^\d{19}$/.test(form.card.replace(/\s/g, ''))) {
    newErrors.card = 'Credit Card must be 19 digits';
    valid = false;
  }

  setErrors(newErrors);
  return valid;
};
