import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HasFileContentComponent } from './has-file-content.component';

describe('HasFileContentComponent', () => {
  let component: HasFileContentComponent;
  let fixture: ComponentFixture<HasFileContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HasFileContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HasFileContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
