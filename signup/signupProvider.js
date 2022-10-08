//importamos fichero de endpoints y métodos api
import { apiProviders } from "../ApiProviders.js";

//recogemos los datos del formulario
export const createUser = async (username, password) =>{
    const body = {
      username: username,
      password: password,
    };
    //llamamos al método de apiPrividers con los params correspondientes
    await apiProviders.post(apiProviders.endpoints.signup, body)
    
}