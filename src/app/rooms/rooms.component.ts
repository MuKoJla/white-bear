import {Component, OnInit} from '@angular/core';
import {RoomModel} from '../main/rooms-gallery/room.model';
import {RoomsDataService} from '../rooms-data.service';


@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  rooms: RoomModel[] = [];
  roomsPerPage = 3;
  currentPage = 1;

  constructor(
    private roomDataService: RoomsDataService
  ) {
    this.rooms = this.roomDataService.getRooms();
  }

  ngOnInit() {
    console.log('ngOnInit ', this.rooms);
  }

  filterRooms(search: string, min: string, max: string, sort: string, availability: string) {
    let filteredRooms = this.filterNames(this.roomDataService.getRooms(), search);
    filteredRooms = this.filterPrice(filteredRooms, min, max);
    filteredRooms = this.sortRooms(filteredRooms, sort);
    filteredRooms = this.filterAvailability(filteredRooms, availability);
    this.rooms = filteredRooms ? filteredRooms : [];
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
    console.log(this.rooms);
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
      default:
        return rooms;
    }
  }

  filterAvailability(rooms: RoomModel[], availability: string) {
    switch (availability) {
      case 'all':
        return rooms;
      case 'free':
        return rooms.filter(room => {
          return room.bookingDates.length === 0;
        });
      case 'booked':
        return rooms.filter(room => {
          return room.bookingDates.length > 0;
        });
      default:
        return rooms;
    }
  }

  filterPrice(rooms: RoomModel[], min: string, max: string) {
    if (isNaN(+min) || isNaN(+max)) {
      return rooms;
    }
    const minPrice = Number(min);
    const maxPrice = Number(max);

    if (maxPrice < 0) {
      return rooms;
    }

    return rooms.filter(room => {
      if (maxPrice > 0 && minPrice >= 0) {
        return Number(min) <= room.price && room.price <= Number(max);
      }
      return Number(min) <= room.price;
    });
  }

}
