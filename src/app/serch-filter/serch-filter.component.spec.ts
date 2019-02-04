import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerchFilterComponent } from './serch-filter.component';

describe('SerchFilterComponent', () => {
  let component: SerchFilterComponent;
  let fixture: ComponentFixture<SerchFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerchFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerchFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
