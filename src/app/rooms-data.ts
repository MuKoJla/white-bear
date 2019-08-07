import {RoomModel} from './main/rooms-gallery/room.model';

export const RoomsData: RoomModel[] = [
  {
    'id': 1,
    'type': 'Standard Room',
    'price': 150,
    'size': 50,
    'view': 'Inner Courtyard',
    'bed': 'One King bed',
    'description': 'For an authentic Ukrainian experience, our traditional hotel rooms have been elegantly appointed in a residential ' +
    'style inspired by the Podil area. Fairmont Rooms, with the choice of either one King or two Queen beds, are the most spacious in ' +
    'the city (40-53 sq. mt.). All rooms in this category feature 4-piece marble bathroom with shower. Fairmont Rooms offer a perfect ' +
    'combination of classic décor and contemporary amenities. ' +
    'These rooms offer City view or Inner Courtyard (Atrium) view - a good choice' +
    'for those who prefer a quieter room.',
    'bookingDates': [],
    'img': 'assets/images/rooms/standard-room-1.jpg',
  },
  {
    'id': 9,
    'type': 'Premium Room',
    'price': 330,
    'size': 66,
    'view': 'City view',
    'bed': 'One King bed',
    'description': 'These one-bedroom suites offer stunning, panoramic Dnipro River, city or Atrium views.  ' +
    'Decorated in elegant style, they feature marble entrance foyer, plush sofa and two armchairs in the sitting room, ' +
    'and an armchair in the bedroom, personal bar and flat-screen televisions.  The well-appointed marble bathrooms feature ' +
    'separate walk-in showers with rain showerhead, large chrome fittings.',
    'bookingDates': [],
    'img': 'assets/images/rooms/gold-room-3.jpg'
  },
  {
    'id': 5,
    'type': 'Suite Room',
    'price': 250,
    'size': 62,
    'view': 'Atrium view',
    'bed': 'two Queen beds',
    'description': 'Enjoy additional space for rest and relaxation in One Bedroom Suite King rooms (61-68 sq. mt.)' +
    ' These suites consist of separate bedroom with King sized Stearns and Foster bed and well appointed sitting room. No two suites are ' +
    'the same. One Bedroom Suites offer City, Atrium or stunning River view.',
    'bookingDates': [],
    'img': 'assets/images/rooms/suite-room-2.jpg'
  },
  {
    'id': 2,
    'type': 'Standard Room',
    'price': 175,
    'size': 55,
    'view': 'City view',
    'bed': 'One King bed',
    'description': 'For an authentic Ukrainian experience, our traditional hotel rooms have been elegantly appointed in a residential ' +
    'style inspired by the Podil area. Fairmont Rooms, with the choice of either one King or two Queen beds, are the most spacious in ' +
    'the city (40-53 sq. mt.). All rooms in this category feature 4-piece marble bathroom with shower. Fairmont Rooms offer a perfect ' +
    'combination of classic décor and contemporary amenities. ' +
    'These rooms offer City view or Inner Courtyard (Atrium) view - a good choice' +
    'for those who prefer a quieter room.',
    'bookingDates': [{
      username: 'mukojla',
      from: '2019-09-01',
      to: '2019-09-05'
    }],
    'img': 'assets/images/rooms/standard-room-2.jpg',
  },
  {
    'id': 3,
    'type': 'Standard Room',
    'price': 185,
    'size': 58,
    'view': 'City view',
    'bed': 'two Queen beds',
    'description': 'For an authentic Ukrainian experience, our traditional hotel rooms have been elegantly appointed in a residential ' +
    'style inspired by the Podil area. Fairmont Rooms, with the choice of either one King or two Queen beds, are the most spacious in ' +
    'the city (40-53 sq. mt.). All rooms in this category feature 4-piece marble bathroom with shower. Fairmont Rooms offer a perfect ' +
    'combination of classic décor and contemporary amenities. ' +
    'These rooms offer City view or Inner Courtyard (Atrium) view - a good choice' +
    'for those who prefer a quieter room.',
    'bookingDates': [],
    'img': 'assets/images/rooms/standard-room-3.jpg'
  },
  {
    'id': 4,
    'type': 'Suite Room',
    'price': 250,
    'size': 60,
    'view': 'Atrium view',
    'bed': 'One King bed',
    'description': 'Enjoy additional space for rest and relaxation in One Bedroom Suite King rooms (61-68 sq. mt.)' +
    ' These suites consist of separate bedroom with King sized Stearns and Foster bed and well appointed sitting room. No two suites are ' +
    'the same. One Bedroom Suites offer City, Atrium or stunning River view.',
    'bookingDates': [],
    'img': 'assets/images/rooms/suite-room-1.jpg'
  },

  {
    'id': 6,
    'type': 'Suite Room',
    'price': 270,
    'size': 64,
    'view': 'River view',
    'bed': 'One King bed',
    'description': 'Enjoy additional space for rest and relaxation in One Bedroom Suite King rooms (61-68 sq. mt.)' +
    ' These suites consist of separate bedroom with King sized Stearns and Foster bed and well appointed sitting room. No two suites are ' +
    'the same. One Bedroom Suites offer City, Atrium or stunning River view.',
    'bookingDates': [],
    'img': 'assets/images/rooms/suite-room-3.jpg'
  },
  {
    'id': 7,
    'type': 'Premium Room',
    'price': 320,
    'size': 65,
    'view': 'Direct River',
    'bed': 'One King bed',
    'description': 'These one-bedroom suites offer stunning, panoramic Dnipro River, city or Atrium views.  ' +
    'Decorated in elegant style, they feature marble entrance foyer, plush sofa and two armchairs in the sitting room, ' +
    'and an armchair in the bedroom, personal bar and flat-screen televisions.  The well-appointed marble bathrooms feature ' +
    'separate walk-in showers with rain showerhead, large chrome fittings.',
    'bookingDates': [],
    'img': 'assets/images/rooms/gold-room-1.jpg'
  },
  {
    'id': 8,
    'type': 'Premium Room',
    'price': 330,
    'size': 66,
    'view': 'Direct River',
    'bed': 'One King bed',
    'description': 'These one-bedroom suites offer stunning, panoramic Dnipro River, city or Atrium views.  ' +
    'Decorated in elegant style, they feature marble entrance foyer, plush sofa and two armchairs in the sitting room, ' +
    'and an armchair in the bedroom, personal bar and flat-screen televisions.  The well-appointed marble bathrooms feature ' +
    'separate walk-in showers with rain showerhead, large chrome fittings.',
    'bookingDates': [
      {
        username: 'IlonMask',
        from: '2019-08-08',
        to: '2019-08-14'
      },
      {
        username: 'IlonMaskFriend',
        from: '2019-08-01',
        to: '2019-08-07'
      },
      {
        username: 'IlonMaskFather',
        from: '2019-08-16',
        to: '2019-08-29'
      }
    ],
    'img': 'assets/images/rooms/gold-room-2.jpg'
  },
];
