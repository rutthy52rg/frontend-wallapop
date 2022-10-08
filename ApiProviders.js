class ApiProviders {
  baseUrl = "http://localhost:8000";
  endpoints = {
    signup: "/auth/register",
    login: "/auth/login",
    announcements: "/api/announcements",
  };
  constructor() {}

  async get(endpoint) {
    const response = await fetch(`${this.baseUrl}${endpoint}`);

    if (!response.ok) {
      throw new Error("No existen resultados");
    }

    const data = await response.json();
    return data;
  }

  async post(endpoint, body) {
    const token = localStorage.getItem("token"); //necesario este método porque en cabecera del cuerpo se especifica la autorización por este método. lin.29
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, //necesaria autorización por token para método post
      },
    });

    const data = await response.json();

    return data;
  }
}

export const apiProviders = new ApiProviders();
