import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-about-gallery',
  templateUrl: './about-gallery.component.html',
  styleUrls: ['./about-gallery.component.css']
})
export class AboutGalleryComponent implements OnInit {
  images = [
    'assets/images/header-1.jpg',
    'assets/images/header-2.jpg',
    'assets/images/header-3.jpg'
  ];

  headers = ['Welcomeheader1', 'header1 header1 header1', 'header2 header2 header2'];
  imageIndex = 0;

  constructor() {
  }

  ngOnInit() {
  }

  onSliderClick(direction: string): number {
    if (direction === 'left' && this.imageIndex === 0 || this.imageIndex === this.images.length - 1) {
      console.log(this.imageIndex);
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
