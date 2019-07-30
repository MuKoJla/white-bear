import {Component, OnInit} from '@angular/core';
import {RoomModel} from './rooms-gallery/room.model';
import {RoomsData} from '../rooms-data';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  rooms: RoomModel[] = RoomsData.slice(0, 6);

  constructor() {
  }

  ngOnInit() {
  }

}
