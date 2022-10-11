import { pubSub } from "../notifications/PubSub.js";
import { createUser } from "./signup-provider.js";
//clase controlador para listar anuncios
export class SignUpController {
  //pasamos por parámetro el nodo html que lo contendrá
  constructor(nodeParent, nodeElement, statusAccount) {
    this.nodeParent = nodeParent;
    this.signupElementForm = nodeElement;
    this.loged = statusAccount;
    this.formSubmit();
  }

  //recoger datos del formulario
  formSubmit() {
     console.log("signup", this.loged);
    const signupButton = this.signupElementForm.querySelector(".signup-submit");
    signupButton.removeAttribute("disabled");
    this.signupElementForm.addEventListener("submit", (event) => {
      event.preventDefault();
      let validateForm = this.validateForm();
      if (validateForm.pass && validateForm.user) {
        this.getDataFromForm();
      }
    });
  }

  validateForm() {
    let response = {
      user: false,
      pass: false,
    };
    const passSelector = this.signupElementForm.querySelector("#password");
    const userSelector = this.signupElementForm.querySelector("#username");

    const minLength = 6;
    const regExp = new RegExp(/^[a-zA-Z0-9]*$/);
    if (
      (passSelector.value !== undefined || passSelector.value !== "") &&
      passSelector.value.length >= minLength &&
      regExp.test(passSelector.value)
    ) {
      response.pass = true;
    } else {
      pubSub.publish(
        pubSub.TOPICS.NOTIFICATION_ERROR,
        `La contraseña debe contener únicamente minúsculas, mayúsculas o números y debe tener más de ${minLength} caracteres`
      );
      response.pass = false;
    }
    console.log(typeof userSelector.value);
    if (userSelector.value !== "") {
      response.user = true;
    } else {
      pubSub.publish(
        pubSub.TOPICS.NOTIFICATION_ERROR,
        `El usuario no puede estar vacío`
      );
      response.user = false;
    }
    return response;
  }

  //método para crear un usuario, los datos se recogen del formulario de signup.html

  async getDataFromForm() {
    const dataForm = new FormData(this.signupElementForm);
    const username = dataForm.get("username");
    const password = dataForm.get("password");
    try {
      await createUser(username, password);
      // const encodeToken = await loginUser(username, password);
      // localStorage.setItem("token", encodeToken);
      pubSub.publish(
        pubSub.TOPICS.NOTIFICATION_STATUS,
        `usuario creado correctamente, ahora puedes entrar desde account`
      );
      this.nodeParent
        .querySelector(".alert-info .btn-close")
        .addEventListener("click", (e) => {
          location.href = "http://localhost:8080";
        });
    } catch (error) {}
  }
}
