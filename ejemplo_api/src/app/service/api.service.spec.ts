import { TestBed } from '@angular/core/testing';
import { provideHttpClient} from '@angular/common/http';
import { ApiService } from '../service/api.service';

describe('ApiService', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [ApiService,provideHttpClient()]});
    service = TestBed.inject(ApiService);
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

  it('Deberia retornar un Observable cuando llamamos a getPosts', () => {
    expect(service.gestUser(0)).toBeTruthy();
  });


});
