import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {RoomsData} from '../../rooms-data';
import {RoomModel} from '../../main/rooms-gallery/room.model';

@Component({
  selector: 'app-room-view',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.css']
})
export class RoomDetailsComponent implements OnInit {
  room: RoomModel;

  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.room = RoomsData.find(room => {
        return room.id.toString() === params.id.toString();
      });
    });
  }

}
