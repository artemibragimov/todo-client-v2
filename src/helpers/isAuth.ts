export const isAuth = () => {
  return localStorage.getItem('isAuth');
};

export const setIsAuth = (isAuth: boolean) => {
  localStorage.isAuth = isAuth;
};
