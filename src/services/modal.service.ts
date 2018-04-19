import { Injectable } from '@angular/core';

@Injectable()
export class ModalService {

  private modalMap:Map<string,any> = new Map();

  constructor() {}

  add(modal:any):void{
    this.modalMap.set(modal.id, modal);
  }

  remove(id:string):void{
    this.modalMap.delete(id);
  }

  open(id:string):void{
      let modal = this.modalMap.get(id);
      if(modal){
        modal.openModal();
      }else{
        console.error('No madal instance with id '+id);
      }
      
  }

  close(id:string):void{
      let modal = this.modalMap.get(id);
      if(modal){
        modal.closeModal();
      }else{
        console.error('No madal instance with id '+id);
      }
  }
}
