import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploPage } from './ejemplo.page';
import { provideHttpClient } from '@angular/common/http';
import { Api2Service } from '../service/api2.service';

describe('EjemploPage', () => {
  let component: EjemploPage;
  let fixture: ComponentFixture<EjemploPage>;
  let apiService: Api2Service;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EjemploPage],
      providers: [Api2Service, provideHttpClient()] // Asegúrate de agregar aquí el servicio si es necesario
    }).compileComponents();

    fixture = TestBed.createComponent(EjemploPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
    apiService = TestBed.inject(Api2Service);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('Deberia retornar indefinido cuando llamamos a la variable users', () => {
    expect(component.users).toBeUndefined();
  });

  it('Deberia retornar indefinido cuando llamamos a la variable user', () => {
    expect(component.user).toBeUndefined();
  });

  it('Deberia retornar true', () => {
    expect(component.ngOnInit).toBeTruthy();
  });
});
