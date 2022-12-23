import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoImageWidgetComponent } from './to-do-image-widget.component';

describe('ToDoImageWidgetComponent', () => {
  let component: ToDoImageWidgetComponent;
  let fixture: ComponentFixture<ToDoImageWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoImageWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDoImageWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
