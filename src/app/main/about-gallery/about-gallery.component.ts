import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-about-gallery',
  templateUrl: './about-gallery.component.html',
  styleUrls: ['./about-gallery.component.css']
})
export class AboutGalleryComponent implements OnInit {
  images = [
    'assets/images/1.jpg',
    'assets/images/2.jpg',
    'assets/images/3.jpg'
  ];

  imageIndex = 0;

  constructor() {
  }

  ngOnInit() {
  }

  onSliderClick(direction: string): number {
    if (direction === 'left' && this.imageIndex === 0 || this.imageIndex === this.images.length - 1) {
      return this.imageIndex = 0;
    }

    if (direction === 'right') {
      return this.imageIndex = this.imageIndex + 1;
    }

    if (direction === 'left') {
      return this.imageIndex = this.imageIndex - 1;
    }
  }

}
