import { loginUser } from "../login/login-provider.js";
import { createUser } from "./signup-provider.js";
import { pubSub } from "../notifications/PubSub.js";
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

  //validate form inputs
  validateForms() {
    const passwordElement = this.signupElementForm.querySelector("#password");
    const minLength = 6;

    if (passwordElement.value.length <= minLength) {
      pubSub.publish(
        pubSub.TOPICS.NOTIFICATION_ERROR,
        `La contraseña debe tener más de ${minLength} caracteres`
      );
    }

    const regExp = new RegExp(/^[a-zA-Z0-9]*$/);

    if (regExp.test(passwordElement.value)) {
      // hacemos cosas
      this.createUser();
    } else {
      pubSub.publish(
        pubSub.TOPICS.NOTIFICATION_ERROR,
        `La contraseña debe contener únicamente minúsculas, mayúsculas o números`
      );
    }
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
      console.log("error addfadsf");
    }
  }
}
