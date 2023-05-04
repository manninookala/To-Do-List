import { Component, OnInit } from '@angular/core';
import { ToDoServiceService } from 'src/app/Services/to-do-service.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  todos:any;
  strikeOff:boolean = false;
  constructor(private ts: ToDoServiceService){
    
  }

  deleteItem(index:number){
    this.ts.deleteToDo(index);
  }

  doneItem(index:number){
    this.ts.checkToDo(index);
  }

  ngOnInit(): void {
    this.todos = this.ts.todoList
  }
}
