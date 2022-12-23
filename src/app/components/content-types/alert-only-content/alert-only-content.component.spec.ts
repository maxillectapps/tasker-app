import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertOnlyContentComponent } from './alert-only-content.component';

describe('AlertOnlyContentComponent', () => {
  let component: AlertOnlyContentComponent;
  let fixture: ComponentFixture<AlertOnlyContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertOnlyContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertOnlyContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
