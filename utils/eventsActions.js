

export const clickEventAddCss = (elementClick, elementToModify, property) => {
  const queryElementClick = document.querySelector(elementClick);
  queryElementClick.addEventListener("click", (event) => {
    document.querySelector(elementToModify).classList.add(property);
  });
};
export const clickEventRemoveCss = (elementClick, elementToModify, property) => {
  const queryElementClick = document.querySelector(elementClick);
  queryElementClick.addEventListener("click", (event) => {
    document.querySelector(elementToModify).classList.remove(property);
  });
};
export const closeModal =(selectorParent)=>{
       const modal = selectorParent.querySelector(".modal");
       modal.classList.add("show");
       const closeModalButton = selectorParent.querySelector(
         ".modal .close-button"
       );
       closeModalButton.addEventListener("click", () => {
         modal.classList.remove("show");
     });
}