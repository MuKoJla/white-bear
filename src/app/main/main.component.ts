import {Component, OnInit} from '@angular/core';
import {RoomModel} from './rooms-gallery/room.model';
import {RoomsDataService} from '../rooms-data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  rooms: RoomModel[];

  constructor(
    private roomDataService: RoomsDataService
  ) {
    this.rooms = this.roomDataService.getRooms().slice(0, 6);
  }

  ngOnInit() {
  }

}
