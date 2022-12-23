import { Component, Input } from '@angular/core';
import { ToDo } from 'src/app/models/todo';

@Component({
  selector: 'app-has-file-content',
  templateUrl: './has-file-content.component.html',
  styleUrls: ['./has-file-content.component.css']
})
export class HasFileContentComponent {
  @Input()
  todo!:ToDo;
}
