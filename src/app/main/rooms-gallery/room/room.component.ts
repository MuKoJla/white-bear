import {Component, Input, OnInit} from '@angular/core';
import {RoomModel} from '../room.model';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  @Input() roomItem: RoomModel;

  constructor() {
  }

  ngOnInit() {
  }

}
