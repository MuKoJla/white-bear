import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomGalleryViewComponent } from './room-gallery-view.component';

describe('RoomGalleryViewComponent', () => {
  let component: RoomGalleryViewComponent;
  let fixture: ComponentFixture<RoomGalleryViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomGalleryViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomGalleryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
