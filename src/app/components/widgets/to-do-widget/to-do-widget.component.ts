import { Component, Input } from '@angular/core';
import { ToDo } from 'src/app/models/todo';

@Component({
  selector: 'app-to-do-widget',
  templateUrl: './to-do-widget.component.html',
  styleUrls: ['./to-do-widget.component.css']
})
export class ToDoWidgetComponent {
@Input()
toDoId!:number;

}
