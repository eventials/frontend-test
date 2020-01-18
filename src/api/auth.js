export const TOKEN_KEY = "@country-token";
export const EMAIL_USER = "@country-email";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const getEmail = () => localStorage.getItem(EMAIL_USER);
export const login = token => {
  localStorage.setItem(TOKEN_KEY, token);
};
export const email = email => {
  localStorage.setItem(EMAIL_USER, email);
};
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(EMAIL_USER);
};
