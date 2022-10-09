import { pubSub } from "../notifications/PubSub.js";
import { decodeToken } from "../utils/jwt.js";
import { loginUser } from "./login-provider.js";
import {
  linkAnnouncementCreateTemplate,
  loginFormTemplate,
  logoutTemplate
} from "./login-view.js";

export class LoginController {
  constructor(nodeContainer, accountStatus) {
    this.nodeContainer = nodeContainer;
    this.nodeLogin = null;
    this.nodeForm = null;
    this.loged = accountStatus;
    this.currentUser = null;
    this.onload();
  }

  onload() {
    this.nodeLogin = this.nodeContainer.querySelector(".account-container");
    if (!this.loged) {
      this.nodeLogin.innerHTML = loginFormTemplate();
      setTimeout(() => {
        this.getDataFromLogin();
      }, 2000);
    } else {
      this.printLogoutTemplate();
    }
  }

  //recoger datos del formulario
  getDataFromLogin() {
    this.nodeForm = this.nodeLogin.querySelector(".login-form");
    this.nodeForm.addEventListener("submit", (event) => {
      event.preventDefault();
      this.nodeContainer
        .querySelector(".offcanvas-end")
        .classList.remove("show");
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
      if (encodeToken !== undefined) {
        location.reload();
        this.printLogoutTemplate();
      } else {
        this.clearToken();
        pubSub.publish(pubSub.TOPICS.NOTIFICATION_ERROR, "Error usuario");
      }
    } catch (error) {}
  }
  clearToken() {
    localStorage.removeItem("token");
  }
  getDataLogedFromToken() {
    const tokenToDecode = localStorage.getItem("token");
    const userData = decodeToken(tokenToDecode);
    return userData;
  }
  printLogoutTemplate() {
    this.currentUser = this.getDataLogedFromToken();
    this.nodeLogin.innerHTML = logoutTemplate(this.currentUser);
    this.printButtonLogout();
    this.printAnnouncementCreateLink();
    this.loged = false;
  }
  printButtonLogout() {
    const logoutButton = this.nodeLogin.querySelector(".logout-button");
    logoutButton.addEventListener("click", () => {
      this.clearToken();
      location.reload();
      this.loged = false;
      this.nodeLogin.innerHTML = loginFormTemplate();
    });
  }
  printAnnouncementCreateLink() {
    if (this.loged || this.loged !== "undefined") {
      const navUl = this.nodeContainer.querySelector(".navbar-nav");
      navUl.insertAdjacentHTML("beforeend", linkAnnouncementCreateTemplate());
    }
  }
}
