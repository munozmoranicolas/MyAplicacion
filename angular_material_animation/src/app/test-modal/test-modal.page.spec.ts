import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestModalPage } from './test-modal.page';

describe('TestModalPage', () => {
  let component: TestModalPage;
  let fixture: ComponentFixture<TestModalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TestModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
