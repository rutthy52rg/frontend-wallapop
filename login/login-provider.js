//importamos fichero de endpoints y métodos api
import { apiProviders } from "../ApiProviders.js";

//recogemos los datos del formulario
export const loginUser = async (username, password) => {
  const body = {
    username: username,
    password: password,
  };
  //llamamos al método de apiPrividers con los params correspondientes
  const user = await apiProviders.post(apiProviders.endpoints.login, body);
  console.log(user.accessToken)
  return user.accessToken;
};
