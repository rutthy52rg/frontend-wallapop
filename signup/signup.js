
import { LoginController } from "../login/LoginController.js";
import { NotificationController } from "../notifications/notificationsController.js";
import { clickEventAddCss, clickEventRemoveCss } from "../utils/eventsActions.js";
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
  const accountStatus = getStatusAccount();
  const selectors = {
    signUpForm: document.querySelector("#signup-form"),
    notificationSelector: document.querySelector(".notification-container"),
    loginFormContainer: document.querySelector(".header-container"),
    singUpParent: document.querySelector("#signup-page"),
  };
  const controllers = {
    signUpController: new SignUpController(selectors.singUpParent, selectors.signUpForm, accountStatus),
    notificationSelector: new NotificationController(
      selectors.notificationSelector
    ),
    loginController: new LoginController(
      selectors.loginFormContainer,
      accountStatus
    ),
  };
  return controllers;
};
const getStatusAccount = () => {
  const token = localStorage.getItem("token");
  if (token && token !== undefined) {
    return true;
  } else {
    return false;
  }
};
