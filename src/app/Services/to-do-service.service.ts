import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToDoServiceService {

  constructor() { }

  todoList  =[
    {
      
      'task':'Sample Task..'
    }
  ]

  addToDo(taskItem:string){
    this.todoList.push({'task':taskItem});
  }

 resetToDo(){
  this.todoList.splice(0,this.todoList.length)
 }

  deleteToDo(index:number){
    this.todoList.splice(index,1);
  }

  checkToDo(index:number){
    this.todoList[index]
  }
}
