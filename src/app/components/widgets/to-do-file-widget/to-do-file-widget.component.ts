import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-to-do-file-widget',
  templateUrl: './to-do-file-widget.component.html',
  styleUrls: ['./to-do-file-widget.component.css']
})
export class ToDoFileWidgetComponent {
@Input()
attachment!:string;
}
