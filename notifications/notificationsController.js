import {
  notificationErrorTemplateHTML,
  notificationStatusTemplateHTML
} from "./notifications-view.js";
import { pubSub } from "./PubSub.js";

export class NotificationController {
  constructor(nodeElement) {
    this.notificationElement = nodeElement;
    this.subscribeToNotificationError();
    this.subscribeToNotificationStatus();
  }

  //me suscribo con el método subscribe a los (publish) cambios en pubsub y le meto por parámetro el mensaje de error que le llegará desde los controladores que lo llamen a través de pubsub.publish
  subscribeToNotificationError() {
    pubSub.subscribe(pubSub.TOPICS.NOTIFICATION_ERROR, (message) => {
      this.printNotificationError(message);
    });
  }
  subscribeToNotificationStatus() {
    pubSub.subscribe(pubSub.TOPICS.NOTIFICATION_STATUS, (message) => {
      this.printNotificationStatus(message);
    });
  }

  printNotificationError(message) {
    this.notificationElement.innerHTML = notificationErrorTemplateHTML(message);
    const modal = this.notificationElement.querySelector(".modal");
    modal.classList.add("show");
    const closeModalButton = this.notificationElement.querySelector(
      ".modal .close-button"
    );
    closeModalButton.addEventListener("click", () => {
      modal.classList.remove("show");
      location.reload();
    });
  }
  printNotificationStatus(message) {
    this.notificationElement.innerHTML =
      notificationStatusTemplateHTML(message);
    // ir al dom a por el boton
    const closeButtonElement =
      this.notificationElement.querySelector(".btn-close");
    // asignarle un escucheador al evento click
    closeButtonElement.addEventListener("click", () => {
      this.notificationElement.innerHTML = "";
    });
          
  }
}
