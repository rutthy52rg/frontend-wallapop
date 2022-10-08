export const buildAnnouncementView = (annoucement) => {
  const annoucementView = `
  <div class="card" style="width: 18rem;">
  <div class="picture">
    <img src="./public/images/${
      annoucement.picture
    }" class="card-img-top" alt="..." />
    
  </div>
  <div class="sale ${annoucement.sale ? "bg-info" : "bg-warning"}">${
    annoucement.sale ? "sale" : "buy"
  }</div>
  <div class="card-body">
    <h5 class="card-title">${annoucement.name}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${annoucement.price}€</li>
    <li class="list-group-item">${annoucement.tags}</li>
    <li class="list-group-item">${annoucement.sale ? "sale" : "buy"}</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Edit</a>
    <a href="#" class="card-link">Delete</a>
  </div>
</div>
    
  `;

  return annoucementView;
};

