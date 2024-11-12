import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiService } from '../service/api.service';
import { Post } from '../interfaces/post';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    });

    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Verifica que no queden peticiones pendientes al finalizar cada prueba
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return user data when gestUser is called', () => {
    const mockUser = { id: 1, name: 'John Doe' };

    service.gestUser(1).subscribe((data) => {
      expect(data).toEqual(mockUser);
    });

    const req = httpMock.expectOne(`${service.apiURL}/users/1`);
    expect(req.request.method).toBe('GET');
    req.flush(mockUser); // Simula la respuesta con los datos de mockUser
  });

  it('should return list of users when getUsers is called', () => {
    const mockUsers = [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' }];

    service.getUsers().subscribe((data) => {
      expect(data).toEqual(mockUsers);
    });

    const req = httpMock.expectOne(`${service.apiURL}/users/`);
    expect(req.request.method).toBe('GET');
    req.flush(mockUsers); // Simula la respuesta con los datos de mockUsers
  });

  it('should return list of posts when getPosts is called', () => {
    const mockPosts = [{ id: 1, title: 'Post 1' }, { id: 2, title: 'Post 2' }];

    service.getPosts().subscribe((data) => {
      expect(data).toEqual(mockPosts);
    });

    const req = httpMock.expectOne(`${service.apiURL}/posts/`);
    expect(req.request.method).toBe('GET');
    req.flush(mockPosts); // Simula la respuesta con los datos de mockPosts
  });

  it('should create a post when createPost is called', () => {
    const newPost: Post = { id: 3, title: 'New Post', body: 'Post content', userId: 1 };
    const mockResponse = { ...newPost, id: 101 };

    service.createPost(newPost).subscribe((data) => {
      expect(data).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(`${service.apiURL}/posts`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(newPost);
    req.flush(mockResponse); // Simula la respuesta con los datos de mockResponse
  });

  it('should update a post when updatePost is called', () => {
    const updatedPost: Post = { id: 3, title: 'Updated Post', body: 'Updated content', userId: 1 };

    service.updatePost(3, updatedPost).subscribe((data) => {
      expect(data).toEqual(updatedPost);
    });

    const req = httpMock.expectOne(`${service.apiURL}/posts/3`);
    expect(req.request.method).toBe('PUT');
    expect(req.request.body).toEqual(updatedPost);
    req.flush(updatedPost); // Simula la respuesta con los datos de updatedPost
  });

  it('should delete a post when deletePost is called', () => {
    const postId = 3;

    service.deletePost(postId).subscribe((data) => {
      expect(data).toBeNull();
    });

    const req = httpMock.expectOne(`${service.apiURL}/posts/${postId}`);
    expect(req.request.method).toBe('DELETE');
    req.flush(null); // Simula una respuesta de eliminación exitosa (sin cuerpo de respuesta)
  });
});