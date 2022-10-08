//importamos fichero de endpoints y métodos api
import { apiProviders } from "../ApiProviders.js";

export const createUser = async (username, password) => {
  const body = {
    username: username,
    password: password,
  };

  await apiProviders.post(apiProviders.endpoints.signup, body);
};