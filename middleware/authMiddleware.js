let isUserRegistered = false;

export const checkUserRegistration = () => {
  return isUserRegistered;
};

export const registerUser = () => {
  isUserRegistered = true;
};
