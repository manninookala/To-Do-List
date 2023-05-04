import { Component, OnInit } from '@angular/core';
import { ToDoServiceService } from 'src/app/Services/to-do-service.service';

@Component({
  selector: 'app-to-do-form',
  templateUrl: './to-do-form.component.html',
  styleUrls: ['./to-do-form.component.css']
})
export class ToDoFormComponent implements OnInit {

  todoInput : string ='';
  

  addItem(){
    if(this.todoInput.length != 0)
    this.ts.addToDo(this.todoInput)
    this.todoInput="";
  }

  resetList(){
    this.ts.resetToDo();
  }

  constructor(private ts:ToDoServiceService){

  }
  ngOnInit(): void {
    
    
  }

}
