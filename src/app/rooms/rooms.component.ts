import {Component, OnInit} from '@angular/core';
import {RoomModel} from '../main/rooms-gallery/room.model';
import roomsData from './rooms.json';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  rooms: RoomModel[] = roomsData;
  roomsPerPage = 2;
  currentPage = 1;

  constructor() {
  }

  ngOnInit() {
    console.log('ngOnInit ', this.rooms);
  }

  get pages(): number[] {
    const pages = [];
    const pageNumber = Math.ceil(this.rooms.length / this.roomsPerPage);
    for (let i = 1; i <= pageNumber; i++) {
      pages.push(i);
    }
    return pages;
  }

  get paginatedRooms() {
    const start = (this.currentPage - 1) * this.roomsPerPage;
    const end = start + this.roomsPerPage;

    return this.rooms.slice(start, end);
  }

  searchRooms(search: string) {
    if (search === '') {
      this.rooms = roomsData;
    } else {
      this.rooms = roomsData.filter(room => {
        return room.type.toLowerCase().includes(search.toLowerCase());
      });
    }
  }

  sort() {

  }

  paginate() {

  }

}
