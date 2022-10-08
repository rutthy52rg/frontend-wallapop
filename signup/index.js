
import { SingUpController } from "./SingupController.js";


document.addEventListener("DOMContentLoaded", () => {
  const signUpFormElement = document.querySelector("#signup-form");

  const singUpController = new SingUpController(signUpFormElement);

});
