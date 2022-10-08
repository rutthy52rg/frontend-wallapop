export const buildCarouselContentView = (idContainer) => {
  const carouselContentView = `
  <div id="${idContainer}" class="carousel slide pt-5" data-bs-ride="true">
        <div class="carousel-indicators">
        </div>
        <div class="carousel-inner">
        <h2>Destacados</h2>
        </div>
    </divs>
  `;

  return carouselContentView;
};

export const buildCarouselItemsView = (annoucement) => {
  let carouseAnouncementItemView = null;
  if (annoucement.destacado) {
    carouseAnouncementItemView = `
     <div class="carousel-item active">
        <img src="../../public/images/${annoucement.picture}" class="w-50" />
        <div class="datas">${annoucement.name}</div>
    </div>
  `;
  } else {
    carouseAnouncementItemView = "";
  }
  return carouseAnouncementItemView;
};

export const buildCarouselDots = (annoucement, idContainer) => {
  let carouselDots = null;
  if (annoucement.destacado) {
    carouselDots = `
        <button type="button" data-bs-target="#${idContainer}" data-bs-slide-to="" class="" aria-current="true" aria-label="Slide 1"></button>`
  } else {
    carouselDots = "";
  }
  return carouselDots;
};




