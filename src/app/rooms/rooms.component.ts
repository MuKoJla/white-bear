import {Component, OnInit} from '@angular/core';
import {RoomModel} from '../main/rooms-gallery/room.model';
import {RoomsData} from '../rooms-data';
import {el} from '@angular/platform-browser/testing/src/browser_util';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  rooms: RoomModel[] = RoomsData;
  roomsPerPage = 3;
  currentPage = 1;

  constructor() {
  }

  ngOnInit() {
    console.log('ngOnInit ', this.rooms);
  }

  filterRooms(search: string, min: string, max: string, sort: string) {
    let filteredRooms = [];
    filteredRooms = this.filterNames(RoomsData, search);
    filteredRooms = this.filterPrice(filteredRooms, min, max);
    filteredRooms = this.sortRooms(filteredRooms, sort);
    this.rooms = filteredRooms;
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

  filterNames(rooms: RoomModel[], search: string): RoomModel[] {
    if (search === '') {
      return rooms;
    }
    return rooms.filter(room => {
      return room.type.toLowerCase().includes(search.toLowerCase());
    });
  }

  sortRooms(rooms: RoomModel[], sort: string) {
    switch (sort) {
      case 'default':
        return rooms;
      case 'lowToHigh':
        return rooms.sort(function (current, next) {
          if (current.price > next.price) {
            return 1;
          }
          if (current.price < next.price) {
            return -1;
          }
        });
      case 'highToLow':
        return rooms.sort(function (current, next) {
          if (current.price < next.price) {
            return 1;
          }
          if (current.price > next.price) {
            return -1;
          }
        });
    }
  }

  filterPrice(rooms: RoomModel[], min: string, max: string) {
    if (isNaN(+min) || isNaN(+max)) {
      return rooms;
    }
    const minPrice = Number(min);
    const maxPrice = Number(max);

    if (maxPrice < 0 && !minPrice) {
      return rooms;
    }

    return rooms.filter(room => {
      if (maxPrice > 0 && minPrice) {
        return Number(min) <= room.price && room.price <= Number(max);
      }
      return Number(min) <= room.price;
    });
  }

}
