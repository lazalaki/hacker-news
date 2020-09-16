export const getFromStroage = (key) =>
  JSON.parse(localStorage.getItem(key));

export const storeInStorage = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));
