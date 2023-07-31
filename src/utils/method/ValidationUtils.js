export const countCharacters = (str) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      count++;
    }
  }
  return count;
};
export const isOnlyCharacterString = (str) => {
  const regex = /[0-9]|[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;
  return !regex.test(str);
};
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

export const isVietnamesePhoneNumberValid = (number) => {
  return /(((\+|)84)|0)(3|5|7|8|9)+([0-9]{8})\b/.test(number);
};

