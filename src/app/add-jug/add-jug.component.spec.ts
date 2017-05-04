import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJugComponent } from './add-jug.component';

describe('AddJugComponent', () => {
  let component: AddJugComponent;
  let fixture: ComponentFixture<AddJugComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddJugComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddJugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
