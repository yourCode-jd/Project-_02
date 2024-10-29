import Cookies from "js-cookie";

export const setLocalStorageItem = (key: string, value: string) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorageItem = (key: string) => {
  return localStorage.getItem(key);
};

export const removeLocalStorageItem = (key: string) => {
  localStorage.remove(key);
};

export const clearAllLocalStorage = () => {
  localStorage.clear();
};

export const setCookiesItem = (key: string, value: string) => {
  Cookies.set(key, value);
};

export const getCookiesItem = (key: string) => {
  return Cookies.get(key);
};

export const removeCookiesItem = (key: string) => {
  Cookies.remove(key);
};
