import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispParaComponent } from './disp-para.component';

describe('DispParaComponent', () => {
  let component: DispParaComponent;
  let fixture: ComponentFixture<DispParaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispParaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispParaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
