
import { LoginController } from "../login/LoginController.js";
import {
  clickEventAddCss,
  clickEventRemoveCss
} from "../utils/eventsActions.js";
import { SignUpController } from "./SignUpController.js";

document.addEventListener("DOMContentLoaded", () => {
  setControllers();
  clickEventAddCss(".navbar-toggler", ".offcanvas-end", "show");
  clickEventRemoveCss(
    ".offcanvas-header > .btn-close",
    ".offcanvas-end",
    "show"
  );
});

const setControllers = () => {
  const selectors = {
    loginFormContainer: document.querySelector(".login-container"),
    signUpForm: document.querySelector("#signup-form"),
  };
  const controllers = {
    signUpController: new SignUpController(selectors.signUpForm),
    loginController: new LoginController(selectors.loginFormContainer),
  };
  return controllers;
};
