import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditJugComponent } from './edit-jug.component';

describe('EditJugComponent', () => {
  let component: EditJugComponent;
  let fixture: ComponentFixture<EditJugComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditJugComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditJugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
