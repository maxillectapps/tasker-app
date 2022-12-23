import { Component,Input } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-to-do-header',
  templateUrl: './to-do-header.component.html',
  styleUrls: ['./to-do-header.component.css']
})
export class ToDoHeaderComponent {
@Input()
toDoId!:number;

  constructor(private todoService:TodoService){

  }

  deleteToDo(toDoId:number):void{
    this.todoService.deleteToDo(toDoId);
  }

}
