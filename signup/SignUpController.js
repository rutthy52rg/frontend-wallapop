import { loginUser } from "../login/login-provider.js";
import { createUser } from "./signup-provider.js";
//clase controlador para listar anuncios
export class SignUpController {
  //pasamos por parámetro el nodo html que lo contendrá
  constructor(nodeElement) {
    this.signupElementForm = nodeElement;
    this.getDataFromSignUp();
  }

  //recoger datos del formulario
  getDataFromSignUp() {
    this.signupElementForm.addEventListener("submit", (event) => {
      event.preventDefault();
      console.log(event.target);
      this.signup();
    });
  }


  //método para crear un usuario, los datos se recogen del formulario de signup.html
  async signup() {
    const dataForm = new FormData(this.signupElementForm);
    const username = dataForm.get("username");
    const password = dataForm.get("password");
    try {
      await createUser(username, password);
      console.log(username, password);
      const encodeToken = await loginUser(username, password);
      localStorage.setItem("token", encodeToken);
      location.href = "http://localhost:8080/";
    } catch (error) {
      throw error ('error en la cración de usuario', error)
    }
  }
}
