export interface RoomModel {
  id: number;
  type: string;
  price: number;
  size: number;
  view: string;
  bed: string;
  description: string;
  bookingDates: {
    username: string;
    from: string;
    to: string;
  }[];
  img: string;
}
