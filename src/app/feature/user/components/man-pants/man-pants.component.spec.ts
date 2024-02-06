import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManPantsComponent } from './man-pants.component';

describe('ManPantsComponent', () => {
  let component: ManPantsComponent;
  let fixture: ComponentFixture<ManPantsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManPantsComponent]
    });
    fixture = TestBed.createComponent(ManPantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
