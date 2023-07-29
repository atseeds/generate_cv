export const isOnlyCharacterString = (str) => {
  const regex = /[0-9]|[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;
  return !regex.test(str);
};
