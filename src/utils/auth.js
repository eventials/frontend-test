export const TOKEN_KEY = 'JWT';

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

export const setUserSession = (data) => {
    localStorage.setItem(TOKEN_KEY, data.token);
};

export const deleteUserSession = () => {
    localStorage.removeItem(TOKEN_KEY);
};
