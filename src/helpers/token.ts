export const getToken = () => {
  return localStorage.getItem('token');
};

export const setToken = (token: string) => {
  localStorage.token = token;
};
export const removeToken = () => {
  window.localStorage.removeItem('token');
};
