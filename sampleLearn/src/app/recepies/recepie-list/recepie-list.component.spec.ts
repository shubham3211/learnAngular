import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepieListComponent } from './recepie-list.component';

describe('RecepieListComponent', () => {
  let component: RecepieListComponent;
  let fixture: ComponentFixture<RecepieListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecepieListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecepieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
