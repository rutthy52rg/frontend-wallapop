import { pubSub } from "../notifications/PubSub.js";
import { SpinnerController } from "../spinner/SpinnerController.js";
import { getAnnouncemets } from "./annoucement-list-provider.js";
import { buildAnnouncementView } from "./announcement-list-view.js";

//clase controlador para listar anuncios
export class AnnouncementsListController {
  //pasamos por parámetro el nodo html que lo contendrá
  constructor(nodeElement, accountStatus) {
    this.announcementSelectorContainer = nodeElement;
    this.loged = accountStatus;
    this.spinner = new SpinnerController(this.announcementSelectorContainer);
    this.loadAnnouncements();
  }

  async loadAnnouncements() {
    console.log("list", this.loged);
    this.spinner.printSpinner();
    let announcements = [];

    try {
      announcements = await getAnnouncemets();
    } catch (error) {
      //insertar aquí el pubsub para controlar errores, en este caso es error de carga
      pubSub.publish(pubSub.TOPICS.NOTIFICATION_ERROR, "Error cargando tweets");
    }
    //cargar aquí la funcion y condicional de cuanto pintar error de anuncios no encontrados
    if (announcements.length === 0) {
      pubSub.publish(pubSub.TOPICS.NOTIFICATION_STATUS, "NO HAY ELEMENTOS");
      this.spinner.clearSpinner();
    } else {
      this.printAnouncements(announcements);
      this.spinner.clearSpinner();
    }
  }

  printAnouncements(announcements) {
    for (const announcement of announcements) {
      const articleElement = document.createElement("article");
      articleElement.innerHTML = buildAnnouncementView(announcement);
      this.announcementSelectorContainer.appendChild(articleElement);
    }
  }

  //crear aquí la funcion que pinta anuncios no encontrados
}
