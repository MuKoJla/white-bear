export interface RoomModel {
  id: number;
  type: string;
  price: number;
  size: number;
  view: string;
  bed: string;
  description: string;
  bookingDates: BookingDateModel[];
  img: string;
}

export interface BookingDateModel {
  username: string;
  from: string;
  to: string;
}
