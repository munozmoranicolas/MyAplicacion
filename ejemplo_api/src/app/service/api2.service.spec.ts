import { TestBed } from '@angular/core/testing';
import { provideHttpClient} from '@angular/common/http';

import { Api2Service } from './api2.service';

describe('Api2Service', () => {
  let service: Api2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [Api2Service,provideHttpClient()]});
    service = TestBed.inject(Api2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Deberia retornar un Observable cuando llamamos a gestUser', () => {
    expect(service.gestUser(1)).toBeTruthy();
  });

  it('Deberia retornar un Observable cuando llamamos a getUsers', () => {
    expect(service.getUsers()).toBeTruthy();
  });
  
});
