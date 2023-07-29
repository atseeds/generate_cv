export const isValidEmail = (email) => {
  // Check if the email address is empty.
  if (email === "") {
    return false;
  }

  // Check if the email address has the correct format.
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!regex.test(email)) {
    return false;
  }

  // The email address is valid.
  return true;
};
