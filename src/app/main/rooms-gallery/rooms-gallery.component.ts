import {Component, Input, OnInit} from '@angular/core';

import {RoomModel} from './room.model';

@Component({
  selector: 'app-rooms-gallery',
  templateUrl: './rooms-gallery.component.html',
  styleUrls: ['./rooms-gallery.component.css']
})
export class RoomsGalleryComponent implements OnInit {
  @Input() roomItems: RoomModel[];

  constructor() {
  }

  ngOnInit() {
  }

}

