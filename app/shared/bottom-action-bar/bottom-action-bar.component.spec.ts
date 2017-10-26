import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomActionBarComponent } from './bottom-action-bar.component';

describe('BottomActionBarComponent', () => {
  let component: BottomActionBarComponent;
  let fixture: ComponentFixture<BottomActionBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomActionBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomActionBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
