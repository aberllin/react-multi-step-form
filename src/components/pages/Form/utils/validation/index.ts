const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const validateEmail = (email: string): string | null => {
  if (email === '') {
    return 'This field is required';
  }
  if (!emailRegex.test(email)) {
    return 'Invalid email format';
  }
  return null;
};

const phoneRegex = /^[0-9+\-\s]+$/;
export const validatePhone = (phone: string): string | null => {
  if (phone === '') {
    return 'This field is required';
  }
  if (!phoneRegex.test(phone)) {
    return 'Phone number cannot contain letters';
  }
  return null;
};
