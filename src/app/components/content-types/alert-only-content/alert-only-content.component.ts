import { Component,Input } from '@angular/core';
import { ToDo } from 'src/app/models/todo';

@Component({
  selector: 'app-alert-only-content',
  templateUrl: './alert-only-content.component.html',
  styleUrls: ['./alert-only-content.component.css']
})
export class AlertOnlyContentComponent {
  @Input()
  todo!:ToDo;
}

