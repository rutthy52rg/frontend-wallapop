import { getAnnouncemets } from "../announcements-list/annoucement-list-provider.js";
import {
  buildCarouselContentView,
  buildCarouselDots,
  buildCarouselItemsView
} from "./announcement-carousel-preview.js";

//clase controlador para listar anuncios
export class AnnouncementsCarouselController {
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

    this.drawAnnouncementsCarouselContent();
    this.drawAnnouncementsCarouselElements(
      announcements,
      "#announcements-carousel > .carousel-inner",
      buildCarouselItemsView
    );
    this.drawAnnouncementsCarouselElements(
      announcements,
      "#announcements-carousel > .carousel-indicators",
      buildCarouselDots,
      "announcements-carousel"
    );
    this.moving(); 
    this.activeDots("#announcements-carousel");
  }

  drawAnnouncementsCarouselContent() {
    this.announcementElementContainer.innerHTML = buildCarouselContentView(
      "announcements-carousel"
    );
  }

  drawAnnouncementsCarouselElements(
    array,
    containerQuerySelector,
    callback,
    idParentSelector
  ) {
    const container = this.announcementElementContainer.querySelector(
      containerQuerySelector
    );
    for (const arr of array) {
      const html = callback(arr, idParentSelector);
      container.insertAdjacentHTML("beforeend", html);
    }
  }

  activeDots(idParentSelector) {
    const dots = this.announcementElementContainer.querySelectorAll(
      idParentSelector + " [data-bs-slide-to]"
    );
    const items = this.announcementElementContainer.querySelectorAll(
      idParentSelector + " .carousel-item"
    );
    let contDot = 0;
    for (const dot of dots) {
      contDot++;
      dot.dataset.bsSlideTo = contDot;
      dot.ariaLabel = contDot;
      dot.classList.remove("active");
      dot.addEventListener("click", (e) => {
        for (let dts of dots) {
          dts.classList.remove("active");
        }
        const dataSlideTo = e.target.dataset.bsSlideTo;
        dot.classList.remove("active");
        items.forEach((item, idx) => {
          item.classList.remove("active");
          if (dataSlideTo == idx + 1) {
            item.classList.add("active");
            e.target.classList.add("active");
          }
        });
      });
    }
  }

  moving() {
    const element = document.querySelector(".carousel-inner");
    let id = setInterval(frame, 2000);
    element.addEventListener("mouseover", () => {
      clearInterval(id);
    });

    function frame() {
      var marginL = 0;
      if (marginL !== -50) {
        marginL = marginL - 20;
        element.style.marginLeft = marginL + "%";
      } else {
        element.style.marginLeft = 0;
        //clearInterval(id);
      }
    }
  }
}
