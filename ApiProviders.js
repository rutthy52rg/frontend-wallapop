class ApiProviders {
  baseUrl = "http://localhost:8000";
  endpoints = {
    signup: "/auth/register"
  };
  constructor() {}


  async post(endpoint, body) {
    //una vez logado cogemos el token que genera 
    const token = localStorage.getItem("token");
    // endpoint post
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      method: "POST",
      //pasamos a string los datos del formulario para mandarlo a bbdd
      body: JSON.stringify(body),
      //cabecera para 
      headers: {
        "Content-Type": "application/json",
        //tipo de autorización
        Authorization: `Bearer ${token}`,
      },
    });

    //cogemos y devolvemos la respuesta en json
    const data = await response.json();
    console.log(data)
    return data;
  }

}

export const apiProviders = new ApiProviders();
