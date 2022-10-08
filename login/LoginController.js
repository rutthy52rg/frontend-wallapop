import { loginUser } from "./login-provider.js";
import { loginFormTemplate } from "./login-view.js";

export class LoginController {
  constructor(nodeContainer) {
    this.nodeContainer = nodeContainer;
    this.nodeForm = null;
    this.printLoginForm();
    
  }

 printLoginForm() {
    this.nodeContainer.innerHTML = loginFormTemplate();
    setTimeout(() => {
        this.getDataFromLogin();
    }, 2000);
  }

  //recoger datos del formulario
  getDataFromLogin() {
    this.nodeForm = this.nodeContainer.querySelector('.login-form');
    this.nodeForm.addEventListener("submit", (event) => {
      event.preventDefault();
      console.log(event.target);
      this.login();
    });
  }

  //método para crear un usuario, los datos se recogen del formulario de signup.html
  async login() {
    const dataForm = new FormData(this.nodeForm);
    const username = dataForm.get("username");
    const password = dataForm.get("password");
    try {
      const encodeToken = await loginUser(username, password);
      localStorage.setItem("token", encodeToken);
      console.log(username, password, encodeToken);
    } catch (error) {
      console.log("error addfadsf");
    }
  }
}
