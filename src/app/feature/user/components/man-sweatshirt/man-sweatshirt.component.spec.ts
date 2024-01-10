import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManSweatshirtComponent } from './man-sweatshirt.component';

describe('ManSweatshirtComponent', () => {
  let component: ManSweatshirtComponent;
  let fixture: ComponentFixture<ManSweatshirtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManSweatshirtComponent]
    });
    fixture = TestBed.createComponent(ManSweatshirtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
