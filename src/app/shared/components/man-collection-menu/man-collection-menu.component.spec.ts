import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManCollectionMenuComponent } from './man-collection-menu.component';

describe('ManCollectionMenuComponent', () => {
  let component: ManCollectionMenuComponent;
  let fixture: ComponentFixture<ManCollectionMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManCollectionMenuComponent]
    });
    fixture = TestBed.createComponent(ManCollectionMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
