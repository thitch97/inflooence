import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostmanagerComponent } from './postmanager.component';

describe('PostmanagerComponent', () => {
  let component: PostmanagerComponent;
  let fixture: ComponentFixture<PostmanagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostmanagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
