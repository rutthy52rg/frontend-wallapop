import { AnnouncementsCarouselController } from "./announcements-carousel/AnnouncementCarouselController.js";
import { AnnouncementsListController } from "./announcements-list/AnnouncementListController.js";

document.addEventListener("DOMContentLoaded", () => {
  const announcementListElement = document.querySelector("#announcements-list");
  const announcementCarouselElement = document.querySelector("#carousel-container");

  const announcementsListController = new AnnouncementsListController(
    announcementListElement
  );
  const announcementCarouselController = new AnnouncementsCarouselController(
    announcementCarouselElement
  );

  clickEventAddCss(".navbar-toggler", ".offcanvas-end", "show");
  clickEventRemoveCss(
    ".offcanvas-header > .btn-close",
    ".offcanvas-end",
    "show"
  );
});



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

