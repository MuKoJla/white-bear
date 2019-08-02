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

interface OnInit {
  ngOnInit: () => void;
}

export interface BookingDateModel {
  username: string;
  from: string;
  to: string;
}
