import { Component,Input } from '@angular/core';
import { ToDo } from 'src/app/models/todo';

@Component({
  selector: 'app-need-acceptance-content',
  templateUrl: './need-acceptance-content.component.html',
  styleUrls: ['./need-acceptance-content.component.css']
})
export class NeedAcceptanceContentComponent {
@Input()
todo!:ToDo;
}
