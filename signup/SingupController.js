import { createUser } from "./signupProvider.js";
//clase controlador para listar anuncios
export class SingUpController {
  //pasamos por parámetro el nodo html que lo contendrá
  constructor(nodeElement) {
    this.signupElementForm = nodeElement;

    this.getDataFromForm();
  }
  
  //recoger datos del formulario
  getDataFromForm(){
    this.signupElementForm.addEventListener("submit", (event) => {
      event.preventDefault();
      this.signup();
    });
  }

  //método para crear un usuario, los datos se recogen del formulario de signup.html
  async signup() {
    const dataForm = new FormData(this.signupElementForm);
    const username = dataForm.get("username");
    const password = dataForm.get("password");
   try {
    await createUser(username, password);
    console.log(username. password)
   }catch(error){
    console.log('error addfadsf')
  }
  }
}
