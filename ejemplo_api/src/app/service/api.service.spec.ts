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
});
