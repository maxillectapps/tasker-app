import { Component,OnInit } from '@angular/core';
import { ToDo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';


@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  toDoList!:ToDo[];

  constructor(private todoService:TodoService){}

ngOnInit(): void {
this.toDoList=this.todoService.getTodoList();
}

}
