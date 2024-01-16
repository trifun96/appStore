import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomanCollectionMenuComponent } from './woman-collection-menu.component';

describe('WomanCollectionMenuComponent', () => {
  let component: WomanCollectionMenuComponent;
  let fixture: ComponentFixture<WomanCollectionMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WomanCollectionMenuComponent]
    });
    fixture = TestBed.createComponent(WomanCollectionMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
