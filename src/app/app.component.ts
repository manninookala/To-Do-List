import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listElement : string = '';


  constructor(private renderer: Renderer2, private el: ElementRef){  }

  onSubmit(){
    console.log(this.listElement)
    this.createListElement()
  }

  createListElement(){
    
  }


  
  
}
