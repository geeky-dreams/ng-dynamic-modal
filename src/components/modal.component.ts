import { Component, OnInit, Input, Output, Renderer2, ViewChild, ElementRef, EventEmitter } from '@angular/core';
import { ModalService } from '../services/modal.service';
@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input()
  title:string;

  @Input()
  id:string;

  @Output()
  open: EventEmitter<any> = new EventEmitter();
    
  @Output()
  close : EventEmitter<any> = new EventEmitter();

  @ViewChild('customModal')
  modal : ElementRef;

  private backdropDiv: any;
  constructor(private modalService: ModalService, private renderer: Renderer2) {}

  ngOnChanges(){
    if(!this.id){
        console.error('id is required for each modal instance.');
        return;
    }
  }

  ngOnInit() {
    this.renderer.listen(this.modal.nativeElement, 'click', ($event)=>{
        if(!$event.srcElement.closest('.modal-content')){
            this.closeModal();
        }
    });

    this.modalService.add(this);
  }

  ngOnDistroy(){
    console.log('distroyed');
    this.modalService.remove(this.id);
  }

  openModal(){
      this.backdropDiv = this.renderer.createElement('div');
      this.renderer.addClass(this.backdropDiv, 'modal-backdrop');
      this.renderer.addClass(this.backdropDiv, 'fade');
      this.renderer.addClass(this.backdropDiv, 'show');
      this.renderer.appendChild(document.body,this.backdropDiv);
      this.renderer.setStyle(this.modal.nativeElement, 'display', 'block');
      setTimeout(()=>{
          this.renderer.setStyle(this.modal.nativeElement, 'padding-right', '17px');   
          this.renderer.addClass(this.modal.nativeElement, 'show');
          this.renderer.addClass(document.body, 'modal-open');
          this.renderer.setStyle(document.body, 'padding-right', '17px');
          this.open.emit({action:'open', id: this.id});
    },200);
  }

  closeModal(){
    this.renderer.removeClass(this.modal.nativeElement, 'show');
    setTimeout(()=>{
        this.renderer.removeClass(document.body, 'modal-open');
        this.renderer.removeStyle(document.body, 'padding-right');
        this.renderer.removeStyle(this.modal.nativeElement, 'display');
        this.renderer.removeStyle(this.modal.nativeElement, 'padding-right');
        this.renderer.removeChild(document.body,this.backdropDiv);
        this.close.emit({action:'close', id: this.id});
    },200);
    
  }
}
