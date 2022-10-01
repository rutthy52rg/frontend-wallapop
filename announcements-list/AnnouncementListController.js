import { getAnnouncemets } from "./annoucement-list-provider.js";
import { buildAnnouncementView } from "./announcement-list-view.js";

//clase controlador para listar anuncios
export class AnnouncementsListController {
  //pasamos por parámetro el nodo html que lo contendrá
  constructor(nodeElement) {
    this.announcementElementContainer = nodeElement;

    this.loadAnnouncements();
  }

  async loadAnnouncements(params) {
    let announcements = [];

    try {
      announcements = await getAnnouncemets();
    } catch (error) {
      alert(error);
    }
    this.drawAnnouncements(announcements);
  }
  drawAnnouncements(announcements) {
    for (const announcement of announcements) {
      const articleElement = document.createElement("article");
      articleElement.innerHTML = buildAnnouncementView(announcement);
      this.announcementElementContainer.appendChild(articleElement);
    }
  }
}
