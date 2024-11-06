import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploPage } from './ejemplo.page';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { Api2Service } from '../service/api2.service';

describe('EjemploPage', () => {
  let component: EjemploPage;
  let fixture: ComponentFixture<EjemploPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EjemploPage],
      providers: [Api2Service, provideHttpClient()] // Asegúrate de agregar aquí el servicio si es necesario
    }).compileComponents();

    fixture = TestBed.createComponent(EjemploPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
