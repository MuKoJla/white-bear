import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';


import {RoomModel} from '../../main/rooms-gallery/room.model';
import {RoomsDataService} from '../../rooms-data.service';
import {t} from '@angular/core/src/render3';

@Component({
  selector: 'app-room-view',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.css']
})
export class RoomDetailsComponent implements OnInit {
  room: RoomModel;
  isBookingInProgress = false;
  errorMessage: string;

  constructor(
    private route: ActivatedRoute,
    private roomDataService: RoomsDataService
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.room = this.roomDataService.getRoomById(params.id);
    });
  }

  booking(username, from, to) {
    const today = new Date().toISOString().substring(0, 10);
    if (!username || !from || !to) {
      return this.errorMessage = 'Please fill all fields!!!';
    }
    if (this.room.bookingDates.length !== 0) {
      const booked = this.room.bookingDates.find(bookingDate => {
        if (from < bookingDate.from && to < bookingDate.from) {
          return false;
        }
        if (from > bookingDate.to) {
          return false;
        }
        return true;
      });

      if (booked) {
        return this.errorMessage = 'This room is booked at these dates!!!';
      }
    }
    if (from < today) {
      return this.errorMessage = 'Date From cannot be less than today';
    }
    if (to < from) {
      return this.errorMessage = 'Date To cannot be less than From';
    }

    this.errorMessage = '';
    this.isBookingInProgress = false;
    this.roomDataService.updateRoomBookingById(this.room.id, username, from, to);
    this.room = this.roomDataService.getRoomById(this.room.id);
  }
}
