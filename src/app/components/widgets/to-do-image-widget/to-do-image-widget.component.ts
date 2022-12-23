import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-to-do-image-widget',
  templateUrl: './to-do-image-widget.component.html',
  styleUrls: ['./to-do-image-widget.component.css']
})
export class ToDoImageWidgetComponent {
@Input()
image!:string;
}
