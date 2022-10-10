
import { NotificationController } from "../notifications/notificationsController.js";
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
    signUpForm: document.querySelector("#signup-form"),
    notificationSelector: document.querySelector('.notification')
  };
  const controllers = {
    signUpController: new SignUpController(selectors.signUpForm),
    notificationController: new NotificationController(selectors.notificationSelector)
  };
  return controllers;
};
