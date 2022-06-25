import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JornadaComponent } from './jornada.component';

describe('JornadaComponent', () => {
  let component: JornadaComponent;
  let fixture: ComponentFixture<JornadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JornadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JornadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
