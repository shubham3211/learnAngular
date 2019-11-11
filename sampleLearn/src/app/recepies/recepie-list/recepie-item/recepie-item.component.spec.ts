import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepieItemComponent } from './recepie-item.component';

describe('RecepieItemComponent', () => {
  let component: RecepieItemComponent;
  let fixture: ComponentFixture<RecepieItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecepieItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecepieItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
