import { AnnouncementsListController } from "./announcements-list/AnnouncementListController.js";

document.addEventListener("DOMContentLoaded", () => {
  const announcementListElement = document.querySelector("#announcements-list");

  const announcementsListController = new AnnouncementsListController(
    announcementListElement
  );

  clickEventAddCss(".navbar-toggler", ".offcanvas-end", "show");
  clickEventRemoveCss( ".offcanvas-header > .btn-close", ".offcanvas-end", "show");});

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
