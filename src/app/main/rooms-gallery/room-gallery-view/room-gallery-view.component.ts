import {Component, Input, OnInit} from '@angular/core';
import {RoomModel} from '../room.model';

@Component({
  selector: 'app-room-gallery-view',
  templateUrl: './room-gallery-view.component.html',
  styleUrls: ['./room-gallery-view.component.css']
})
export class RoomGalleryViewComponent implements OnInit {
  @Input() roomItem: RoomModel;

  constructor() {
  }

  ngOnInit() {
  }

}
