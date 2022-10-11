import { pubSub } from "../notifications/PubSub.js";
import { decodeToken } from "../utils/jwt.js";
import {
  getAnnouncementId,
  removeAnnouncementId
} from "./announcement-details-provider.js";
import { annoucementDetailTemplate } from "./announcement-details-view.js";

export class AnnouncementDetailsController {
  constructor(nodeElement, statusAccount) {
    this.nodeElementContainer = nodeElement;
    this.loged = statusAccount;
    this.announcement = null;
    this.load();
  }
  load() {
    console.log("detail", this.loged);
  }

  async printAnnouncementDetail(annoucementId) {
    try {
      const annoucement = await getAnnouncementId(annoucementId);
      this.announcement = annoucement;
      this.nodeElementContainer.innerHTML = annoucementDetailTemplate(
        this.announcement
      );
      this.printRemoveButton();
    } catch (error) {
      pubSub.publish(
        pubSub.TOPICS.NOTIFICATION_ERROR,
        "no se pudo obtener el anuncio"
      );
    }
  }
  printRemoveButton() {
    const token = localStorage.getItem("token");
    if (token) {
      const tokenData = decodeToken(token);
      console.log(tokenData, this.announcement);

      if (tokenData.userId === this.announcement.userId) {
        const removeButton = this.nodeElementContainer.querySelector("button");
        removeButton.style.display = "block";
        removeButton.addEventListener("click", () => this.removeAnnouncement());
      }
    }
  }

  async removeAnnouncement() {
    const response = window.confirm("¿Seguro que quieres borrar el tweet?");
    if (response) {
      try {
        await removeAnnouncementId(this.announcement.id);
        alert("anuncio borrado correctamente");
        window.location = "/";
      } catch (error) {
        // pubsub para mostrar notificación de error
        pubSub.publish(
          pubSub.TOPICS.NOTIFICATION_ERROR,
          "no se pudo borrar el anuncio"
        );
      }
    }
  }
}