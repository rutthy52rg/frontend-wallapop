import { LoginController } from "../login/LoginController.js";
import { AnnouncementsCarouselController } from "./announcements-carousel/AnnouncementCarouselController.js";
import { AnnouncementsListController } from "./announcements-list/AnnouncementListController.js";
import { NotificationController } from "./notifications/notificationsController.js";
import {
  clickEventAddCss,
  clickEventRemoveCss
} from "./utils/eventsActions.js";

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
    announcementCarouselSelector: document.querySelector("#carousel-container"),
    announcementListSelector: document.querySelector("#announcements-list"),
    notificationSelector: document.querySelector(".notification"),
   loginFormContainer: document.querySelector(".header-container"),
  };
  const controllers = {
    announcementsListController: new AnnouncementsListController(
      selectors.announcementListSelector,
      accountStatus
    ),
    announcementCarouselController: new AnnouncementsCarouselController(
      selectors.announcementCarouselSelector
    ),
    notificationController: new NotificationController(
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
