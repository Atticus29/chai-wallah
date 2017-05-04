import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JugComponent } from './jug.component';

describe('JugComponent', () => {
  let component: JugComponent;
  let fixture: ComponentFixture<JugComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JugComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
