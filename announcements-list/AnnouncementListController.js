import { getAnnouncemets } from "./annoucement-list-provider.js";
import { buildAnnouncementView } from "./announcement-list-view.js";

//clase controlador para listar anuncios
export class AnnouncementsListController {
  //pasamos por parámetro el nodo html que lo contendrá
  constructor(nodeElement) {
    this.announcementElementContainer = nodeElement;

    this.loadAnnouncements();
  }

  async loadAnnouncements() {
    let announcements = [];

    try {
      announcements = await getAnnouncemets();
    } catch (error) {
      alert(error);
      //insertar aquí el pubsub para controlar errores
    }

    //cargar aquí la funcion y condicional de cuanto pintar error de anuncios no encontrados
    
   //cargar aquí es spinner de carga

    this.drawAnnouncements(announcements);
  }

  drawAnnouncements(announcements) {
    for (const announcement of announcements) {
      const articleElement = document.createElement("article");
      articleElement.innerHTML = buildAnnouncementView(announcement);
      this.announcementElementContainer.appendChild(articleElement);
    }
  }

  //crear aquí la funcion que pinta anuncios no encontrados
}
