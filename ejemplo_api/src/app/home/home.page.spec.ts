import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiService } from '../service/api.service';
import { HomePage } from './home.page';
import { of } from 'rxjs';
import { Post } from '../interfaces/post';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let apiService: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [IonicModule.forRoot(), HttpClientTestingModule],
      providers: [ApiService]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    apiService = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getUsuarios and set users correctly', () => {
    const mockUsers = [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' }];
    spyOn(apiService, 'getUsers').and.returnValue(of(mockUsers));

    component.getUsuarios();

    expect(apiService.getUsers).toHaveBeenCalled();
    expect(component.users).toEqual(mockUsers);
  });

  it('should call getPosts and set posts in reverse order', () => {
    const mockPosts = [{ id: 1, title: 'Post 1' }, { id: 2, title: 'Post 2' }];
    spyOn(apiService, 'getPosts').and.returnValue(of(mockPosts));

    component.getPosts();

    expect(apiService.getPosts).toHaveBeenCalled();
    expect(component.posts).toEqual(mockPosts.reverse());
  });

  it('should call gestUser and set user correctly when getUsuario is called', () => {
    const mockUser = { id: 1, name: 'John Doe' };
    spyOn(apiService, 'gestUser').and.returnValue(of(mockUser));

    component.getUsuario(1);

    expect(apiService.gestUser).toHaveBeenCalledWith(1);
    expect(component.user).toEqual(mockUser);
  });

  it('should update a post when guardarPost is called with an existing userId', () => {
    const updatedPost: Post = { id: 1, title: 'Updated Post', body: 'Updated body', userId: 1 };
    component.post = updatedPost;
    const spyUpdatePost = spyOn(apiService, 'updatePost').and.returnValue(of(updatedPost));
    const spyGetPosts = spyOn(component, 'getPosts');

    component.guardarPost();

    expect(spyUpdatePost).toHaveBeenCalledWith(updatedPost.id, updatedPost);
    expect(spyGetPosts).toHaveBeenCalled();
  });

  it('should call deletePost and refresh posts when eleminarPost is called', () => {
    const mockPost: Post = { id: 1, title: 'Test Post', body: 'Test body', userId: 1 };
    const spyDeletePost = spyOn(apiService, 'deletePost').and.returnValue(of(null));
    const spyGetPosts = spyOn(component, 'getPosts');

    component.eleminarPost(mockPost);

    expect(spyDeletePost).toHaveBeenCalledWith(mockPost.id);
    expect(spyGetPosts).toHaveBeenCalled();
  });

  it('should set post and call getUsuario when setPost is called', () => {
    const mockPost: Post = { id: 1, title: 'Test Post', body: 'Test body', userId: 1 };
    const spyGetUsuario = spyOn(component, 'getUsuario');

    component.setPost(mockPost);

    expect(component.post).toEqual(mockPost);
    expect(spyGetUsuario).toHaveBeenCalledWith(mockPost.id);
    expect(component.compareWith).toBe(component.compareWithFn);
  });
});