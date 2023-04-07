import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversorUnidadesComponent } from './conversor-unidades.component';

describe('ConversorUnidadesComponent', () => {
  let component: ConversorUnidadesComponent;
  let fixture: ComponentFixture<ConversorUnidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConversorUnidadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConversorUnidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
