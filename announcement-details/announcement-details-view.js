export const annoucementDetailTemplate = (annoucement) => {
  const updatedAt = new Date(annoucement.updatedAt);
  const htmlTemplate = `
    <div class="card" style="width: 400px;margin: 200px auto;">
            <div class="picture">
                <img src="${
                  annoucement.picture
                }" class="card-img-top" alt="..." />
            </div>
            <div class="sale ${
              annoucement.sale == "on" ? "bg-info" : "bg-warning"
            }">${annoucement.sale == "on" ? "sale" : "buy"}</div>
            <div class="card-body text-left ">
                <h5 class="card-title">${annoucement.name}</h5>
                <p class="card-text">${updatedAt.toLocaleDateString()}</p>
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
                <p>${annoucement.user.username}</p>
                <button class="btn btn-info" style="display: none">Delete Announcement</button>
            </div>
        </div>
    </div>

  `;
  return htmlTemplate;
};
