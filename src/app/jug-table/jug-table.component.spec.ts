import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JugTableComponent } from './jug-table.component';

describe('JugTableComponent', () => {
  let component: JugTableComponent;
  let fixture: ComponentFixture<JugTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JugTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JugTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
