
export class AnnouncementCreateController {
  constructor(nodeContainer, accountStatus) {
    this.nodeContainer = nodeContainer;
    this.loged = accountStatus;
  }

  onload(){
    if(this.loged){
      console.log('toy logado')
    }else{
      console.log("no estoy");
      
    }
  }
}