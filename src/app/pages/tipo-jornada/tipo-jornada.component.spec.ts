import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoJornadaComponent } from './tipo-jornada.component';

describe('TipoJornadaComponent', () => {
  let component: TipoJornadaComponent;
  let fixture: ComponentFixture<TipoJornadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoJornadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoJornadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
