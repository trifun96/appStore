import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedCollectionComponent } from './recommended-collection.component';

describe('RecommendedCollectionComponent', () => {
  let component: RecommendedCollectionComponent;
  let fixture: ComponentFixture<RecommendedCollectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecommendedCollectionComponent]
    });
    fixture = TestBed.createComponent(RecommendedCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
