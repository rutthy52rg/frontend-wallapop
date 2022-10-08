import { buildSpinner } from "./spinner-view.js";
export class SpinnerController {
  constructor(nodeElement) {
    this.spinnerSelector = nodeElement;
  }
  printSpinner() {
    this.spinnerSelector.innerHTML = buildSpinner();
  }
  clearSpinner() {
    this.spinnerSelector.querySelector(".spinner").classList.toggle("hide");
  }
}
