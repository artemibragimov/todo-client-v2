export const getTokenFromLocalStorage = () => {
  return localStorage.getItem('token');
};

export const setTokenInLocalStorage = (token?: string) => {
  localStorage.token = token;
};
