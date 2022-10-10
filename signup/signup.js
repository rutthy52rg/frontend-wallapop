
import { NotificationController } from "../notifications/notificationsController.js";
import { SignUpController } from "./SignUpController.js";

  document.addEventListener("DOMContentLoaded", () => {
    setControllers();
  });


const setControllers = () => {
  const selectors = {
    signUpForm: document.querySelector("#signup-form"),
    notificationSelector: document.querySelector(".notification-container")
  };
  const controllers = {
    signUpController: new SignUpController(selectors.signUpForm),
    notificationSelector: new NotificationController( selectors.notificationSelector)
  };
  return controllers;
};
