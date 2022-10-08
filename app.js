import { AnnouncementsCarouselController } from "./announcements-carousel/AnnouncementCarouselController.js";
import { AnnouncementsListController } from "./announcements-list/AnnouncementListController.js";
import { NotificationController } from "./notifications/notificationsController.js";

document.addEventListener("DOMContentLoaded", () => {
  appControllers();
  clickEventAddCss(".navbar-toggler", ".offcanvas-end", "show");
  clickEventRemoveCss(
    ".offcanvas-header > .btn-close",
    ".offcanvas-end",
    "show"
  );
});

const appControllers = () => {
  const announcementCarouselSelector = document.querySelector(
    "#carousel-container"
  );
  const announcementListSelector = document.querySelector(
    "#announcements-list"
  );

  const notificationSelector = document.querySelector("#notification");
  // const spinnerSelector = document.querySelector(".spinner");

  const announcementsListController = new AnnouncementsListController(
    announcementListSelector
  );
  const announcementCarouselController = new AnnouncementsCarouselController(
    announcementCarouselSelector
  );
  const notificationController = new NotificationController(
    notificationSelector
  );
};
const clickEventAddCss = (elementClick, elementToModify, property) => {
  const queryElementClick = document.querySelector(elementClick);
  queryElementClick.addEventListener("click", (event) => {
    document.querySelector(elementToModify).classList.add(property);
  });
};
const clickEventRemoveCss = (elementClick, elementToModify, property) => {
  const queryElementClick = document.querySelector(elementClick);
  queryElementClick.addEventListener("click", (event) => {
    document.querySelector(elementToModify).classList.remove(property);
  });
};
