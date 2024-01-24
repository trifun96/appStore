import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomanSweatshirtComponent } from './woman-sweatshirt.component';

describe('WomanSweatshirtComponent', () => {
  let component: WomanSweatshirtComponent;
  let fixture: ComponentFixture<WomanSweatshirtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WomanSweatshirtComponent]
    });
    fixture = TestBed.createComponent(WomanSweatshirtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
