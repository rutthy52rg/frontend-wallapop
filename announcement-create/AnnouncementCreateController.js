import { pubSub } from "../notifications/PubSub.js";
import { createAnnouncement } from "./announcement-create-provider.js";


export class AnnouncementCreateController {
  constructor(nodeContainer, accountStatus) {
    this.nodeContainer = nodeContainer;
    this.loged = accountStatus;
    this.onload();
  }

  onload() {
    console.log(this.nodeContainer)
    this.nodeContainer.addEventListener("submit", (event) => {
      event.preventDefault();
      this.getDataFromForm();
      pubSub.publish(pubSub.TOPICS.NOTIFICATION_STATUS, "anuncio creado correctamente");
      location.reload();
    });
  }
  getDataFromForm() {
    const formData = new FormData(this.nodeContainer);
    const tagsElement = this.nodeContainer.querySelector("#tags");
    const tags=[]
    for (let option of tagsElement.options) {
      if (option.selected) {
        tags.push(option.value);
      }
    }
    const content = {
      name: formData.get("name"),
      picture: formData.get("picture"),
      tags: tags,
      description: formData.get("description"),
      price: formData.get("price"),
      sale: formData.get("sale"),
      outstanding: formData.get("outstanding")
    };
    console.log(content)

    createAnnouncement(content)
  }
}
