import {Component, OnInit} from '@angular/core';
import {RoomModel} from './room.model';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  rooms: RoomModel[] = [
    {
      'id': 1,
      'type': 'Standard Room',
      'number': 101,
      'price': 250,
      'available': true,
      'img': 'assets/images/header-1.jpg'
    },
    {
      'id': 2,
      'type': 'Family Room',
      'number': 102,
      'price': 250,
      'available': false,
      'img': 'assets/images/header-2.jpg'
    },
    {
      'id': 3,
      'type': 'Single Room',
      'number': 101,
      'price': 250,
      'available': true,
      'img': 'assets/images/header-3.jpg'
    },
    {
      'id': 1,
      'type': 'Standard Room',
      'number': 101,
      'price': 250,
      'available': true,
      'img': 'assets/images/header-1.jpg'
    },
        {
      'id': 1,
      'type': 'Standard Room',
      'number': 101,
      'price': 250,
      'available': true,
      'img': 'assets/images/header-1.jpg'
    },
    {
      'id': 1,
      'type': 'Standard Room',
      'number': 101,
      'price': 250,
      'available': true,
      'img': 'assets/images/header-1.jpg'
    }
  ];


  constructor() {
  }

  ngOnInit() {
  }

}

