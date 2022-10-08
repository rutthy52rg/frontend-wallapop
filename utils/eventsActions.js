

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