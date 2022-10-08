import { pubSub } from "./PubSub.js";
import { buildNotication } from "./notifications-view.js";

export class NotificationController {
  constructor(nodeElement) {
    this.notificationElement = nodeElement;
    this.subscribeToNotification();
  }

  //me suscribo con el método subscribe a los (publish) cambios en pubsub y le meto por parámetro el mensaje de error que le llegará desde los controladores que lo llamen a través de pubsub.publish
  subscribeToNotification() {
    pubSub.subscribe(pubSub.TOPICS.NOTIFICATION, (message) => {
      this.printNotification(message);
    });
  }

  printNotification(message) {
    this.notificationElement.innerHTML = buildNotication(message);

    // ir al dom a por el boton
    const closeButtonElement = this.notificationElement.querySelector(
      ".notification-button-close"
    );

    // asignarle un escucheador al evento click
    closeButtonElement.addEventListener("click", () => {
      this.notificationElement.innerHTML = "";
    });
  }
}
