//importamos fichero de endpoints y métodos api

import { apiProviders } from "../ApiProviders.js"

//recogemos los datos del formulario
export const createUser = async (username, pass) =>{
    const body = {
        username: username,
        pass: pass,
    }
    //llamamos al método de apiPrividers con los params correspondientes
    await apiProviders.post(apiProviders.endpoints.signup, body)

}