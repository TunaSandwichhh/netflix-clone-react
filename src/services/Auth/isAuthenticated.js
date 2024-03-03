export const isAuthenticated = () => {
  return !!sessionStorage.getItem("userToken");
};
