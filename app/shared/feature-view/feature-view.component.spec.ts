import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureViewComponent } from './feature-view.component';

describe('FeatureViewComponent', () => {
  let component: FeatureViewComponent;
  let fixture: ComponentFixture<FeatureViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
