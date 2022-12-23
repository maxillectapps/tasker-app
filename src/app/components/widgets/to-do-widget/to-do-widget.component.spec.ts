import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoWidgetComponent } from './to-do-widget.component';

describe('ToDoWidgetComponent', () => {
  let component: ToDoWidgetComponent;
  let fixture: ComponentFixture<ToDoWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDoWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
