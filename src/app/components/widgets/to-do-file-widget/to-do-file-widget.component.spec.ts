import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoFileWidgetComponent } from './to-do-file-widget.component';

describe('ToDoFileWidgetComponent', () => {
  let component: ToDoFileWidgetComponent;
  let fixture: ComponentFixture<ToDoFileWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoFileWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDoFileWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
