import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoAcceptanceWidgetComponent } from './to-do-acceptance-widget.component';

describe('ToDoAcceptanceWidgetComponent', () => {
  let component: ToDoAcceptanceWidgetComponent;
  let fixture: ComponentFixture<ToDoAcceptanceWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoAcceptanceWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDoAcceptanceWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
