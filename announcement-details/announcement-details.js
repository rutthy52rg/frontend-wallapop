import { AnnouncementDetailsController } from "../announcement-details/AnnouncementDetailsController.js";
import { LoginController } from "../login/LoginController.js";
import { NotificationController } from "../notifications/notificationsController.js";
import {
    clickEventAddCss,
    clickEventRemoveCss
} from "../utils/eventsActions.js";

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
  const params = new URLSearchParams(location.search);
  const announcementId = params.get("id");
  const selectors = {
    loginFormContainer: document.querySelector(".header-container"),
    notificationStatus: document.querySelector(".notification"),
    announcementDetailsContainer: document.querySelector(
      ".announcement-details-container"
    ),
  };
  const controllers = {
    loginController: new LoginController(
      selectors.loginFormContainer,
      accountStatus
    ),
    notificationController: new NotificationController(
      selectors.notificationStatus
    ),
    announcementDetailsControllers: new AnnouncementDetailsController(
      selectors.announcementDetailsContainer
    ),
  };
  controllers.announcementDetailsControllers.printAnnouncementDetail(
    announcementId
  );
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
