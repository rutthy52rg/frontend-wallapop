import { LoginController } from "../login/LoginController.js";
import { NotificationController } from "../notifications/notificationsController.js";
import {
  clickEventAddCss,
  clickEventRemoveCss
} from "../utils/eventsActions.js";
import { AnnouncementCreateController } from "./AnnouncementCreateController.js";

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
  console.log(accountStatus);
  const selectors = {
    loginFormContainer: document.querySelector(".header-container"),
    notificationStatus: document.querySelector(".notification"),
    createAnnuncementForm: document.querySelector("#create-announcement-form"),
  };
  const controllers = {
    loginController: new LoginController(
      selectors.loginFormContainer,
      accountStatus
    ),
    notificationController: new NotificationController(
      selectors.notificationStatus
    ),
    announcementCreateController: new AnnouncementCreateController(
      selectors.createAnnuncementForm,
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
