import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutGalleryComponent } from './about-gallery.component';

describe('AboutGalleryComponent', () => {
  let component: AboutGalleryComponent;
  let fixture: ComponentFixture<AboutGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
