import {Injectable} from '@angular/core';
import {BookingDateModel, RoomModel} from './main/rooms-gallery/room.model';
import {RoomsData} from './rooms-data';

@Injectable({providedIn: 'root'})
export class RoomsDataService {
  private rooms: RoomModel[] = RoomsData;

  getRooms(): RoomModel[] {
    return [...this.rooms];
  }

  private sortBookingDates(roomBookingDates: BookingDateModel[]): BookingDateModel[] {
    return roomBookingDates.sort(function (currentBooking, nextBooking) {
      if (currentBooking.from > nextBooking.from) {
        return 1;
      }
      return -1;
    });
  }

  getRoomById(id: number): RoomModel {
    const room = this.getRooms().find(roomItem => {
      return roomItem.id.toString() === id.toString();
    });

    room.bookingDates = this.sortBookingDates(room.bookingDates);
    return room;
  }

  updateRoomBookingById(roomId: number, username: string, from: string, to: string) {
    this.rooms.map(room => {
      if (room.id === roomId) {
        room.bookingDates.push({
          username: username,
          from: from,
          to: to,
        });
        return room;
      }
    });
  }
}
