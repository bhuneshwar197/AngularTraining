import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildLazyComponent } from './child-lazy.component';

describe('ChildLazyComponent', () => {
  let component: ChildLazyComponent;
  let fixture: ComponentFixture<ChildLazyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildLazyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
