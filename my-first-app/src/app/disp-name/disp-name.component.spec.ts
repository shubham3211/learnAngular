import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispNameComponent } from './disp-name.component';

describe('DispNameComponent', () => {
  let component: DispNameComponent;
  let fixture: ComponentFixture<DispNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
