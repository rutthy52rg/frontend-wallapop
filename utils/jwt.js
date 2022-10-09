export const decodeToken = (jwt) => {
  let decodedToken;

  try {
    const stringifiedToken = atob(jwt.split(".")[1]);
    decodedToken = JSON.parse(stringifiedToken);
  } catch (error) {
    return null;
  }

  return decodedToken;
};
