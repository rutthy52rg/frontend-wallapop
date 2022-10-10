import { LoginController } from "../login/LoginController.js";
import { NotificationController } from "../notifications/notificationsController.js";
import { pubSub } from "../notifications/PubSub.js";
import {
  clickEventAddCss,
  clickEventRemoveCss
} from "../utils/eventsActions.js";
import { AnnouncementCreateController } from "./AnnouncementCreateController.js";

document.addEventListener("DOMContentLoaded", () => {
  const accountStatus = getStatusAccount();
  setControllers();
  if (!accountStatus) {
    document.querySelector("#create-announcement").remove();
    pubSub.publish(pubSub.TOPICS.NOTIFICATION_STATUS, "no tienes permisos");
    document.querySelector(".notification .btn-close").remove();
    setTimeout(() => {
      location.href = "http://127.0.0.1:8080/signup.html";
    }, 1000);
  }

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
      selectors.createAnnuncementForm
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
