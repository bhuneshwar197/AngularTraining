import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentLazyComponent } from './parent-lazy.component';

describe('ParentLazyComponent', () => {
  let component: ParentLazyComponent;
  let fixture: ComponentFixture<ParentLazyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentLazyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
