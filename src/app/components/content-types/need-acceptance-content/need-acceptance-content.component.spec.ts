import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeedAcceptanceContentComponent } from './need-acceptance-content.component';

describe('NeedAcceptanceContentComponent', () => {
  let component: NeedAcceptanceContentComponent;
  let fixture: ComponentFixture<NeedAcceptanceContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeedAcceptanceContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeedAcceptanceContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
