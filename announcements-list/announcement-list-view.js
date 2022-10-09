export const buildAnnouncementView = (annoucement) => {
  const annoucementView = `
  <div class="card" style="width: 18rem;">
  <div class="picture">
    <img src="${annoucement.picture}" class="card-img-top" alt="..." />
  </div>
  <div class="sale ${annoucement.sale == "on" ? "bg-info" : "bg-warning"}">${
    annoucement.sale == "on" ? "sale" : "buy"
  }</div>
  <div class="card-body text-left ">
    <h5 class="card-title">${annoucement.name}</h5>
    <p class="card-text">${annoucement.description}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${annoucement.price}€</li>
    <li class="list-group-item">${
      annoucement.tags.length > 0 ? annoucement.tags.join(", ") : ""
    } </li>
    <li class="list-group-item">${
      annoucement.sale == "on" ? "sale" : "buy"
    }</li>
  </ul>
  <div class="card-footer">
    <a href="http://localhost:8080/announcement-details.html?id=${
      annoucement.id
    }" class="btn ${annoucement.sale == "on" ? 'btn-info' : 'btn-warning'}">See details</a>
  </div>
</div>
  `;

  return annoucementView;
};

