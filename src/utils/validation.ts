// Validations
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^(?!.*\.\.)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email.trim());
};

export const isValidPhone = (phone: string): boolean => {
  const phoneRegex = /^09\d{9}$/;
  return phoneRegex.test(phone.trim());
};

export const isValidPassword = (password: string): boolean => {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  return passwordRegex.test(password);
};