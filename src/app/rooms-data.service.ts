import {Injectable} from '@angular/core';
import {RoomModel} from './main/rooms-gallery/room.model';
import {RoomsData} from './rooms-data';

@Injectable({providedIn: 'root'})
export class RoomsDataService {
  private rooms: RoomModel[] = RoomsData;

  getRooms(): RoomModel[] {
    return [...this.rooms];
  }

  getRoomById(id: number): RoomModel {
    return this.getRooms().find(room => {
      return room.id.toString() === id.toString();
    });
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

    // sort by booking dates
  }
}
