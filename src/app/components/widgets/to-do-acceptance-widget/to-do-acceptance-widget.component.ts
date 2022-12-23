import { Component } from '@angular/core';

@Component({
  selector: 'app-to-do-acceptance-widget',
  templateUrl: './to-do-acceptance-widget.component.html',
  styleUrls: ['./to-do-acceptance-widget.component.css']
})
export class ToDoAcceptanceWidgetComponent {


  accept():void{
    console.log("Accepted");
  }

  reject():void{
    console.log("Rejected");
  }

}
