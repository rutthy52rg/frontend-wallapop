import { SignupController } from "./SignupController.js";

document.addEventListener("DOMContentLoaded", () => {
  const signUpFormElement = document.querySelector(".signup-form");

  const signupController = new SignupController(signUpFormElement);

});
