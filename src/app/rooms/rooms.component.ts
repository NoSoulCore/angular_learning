import { Component } from '@angular/core';
import { Room, RoomList } from './rooms';
import { CommonModule } from '@angular/common';
import { RoomsListComponent } from './rooms-list/rooms-list.component';

@Component({
  selector: 'hinv-rooms',
  standalone: true,
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss',
  imports: [CommonModule, RoomsListComponent],
})
export class RoomsComponent {
  hotelName = 'Hilton Hotel';
  numberOfRooms = 20;
  hideRooms = false;

  selectedRoom!: RoomList;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  title = 'Room List';

  roomList: RoomList[] = [];

  ngOnInit(): void {
    this.roomList = [
      {
        roomNumber: 1,
        roomType: 'Deluxe A Room',
        amenities: 'Air Conditioner, Free Wi-Fi, TV',
        price: 500,
        photos:
          'https://plus.unsplash.com/premium_photo-1683140589868-4f9b38110050?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        checkinTime: new Date('1-Jan-2024'),
        checkoutTime: new Date('7-Jan-2024'),
        rating: 4.5,
      },
      // {
      //   roomNumber: 16,
      //   roomType: 'Deluxe B Room',
      //   amenities: 'Air Conditioner, Free Wi-Fi, TV',
      //   price: 500,
      //   photos:
      //     'https://plus.unsplash.com/premium_photo-1683140589868-4f9b38110050?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      //   checkinTime: new Date('1-Jan-2024'),
      //   checkoutTime: new Date('7-Jan-2024'),
      //   rating: 4.449444445,
      // },
      // {
      //   roomNumber: 17,
      //   roomType: 'Deluxe C Room',
      //   amenities: 'Air Conditioner, Free Wi-Fi, TV',
      //   price: 500,
      //   photos:
      //     'https://plus.unsplash.com/premium_photo-1683140589868-4f9b38110050?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      //   checkinTime: new Date('1-Jan-2024'),
      //   checkoutTime: new Date('7-Jan-2024'),
      //   rating: 4.3,
      // },
      {
        roomNumber: 2,
        roomType: 'Deluxe D Room',
        amenities: 'Air Conditioner, Free Wi-Fi, TV',
        price: 500,
        photos:
          'https://plus.unsplash.com/premium_photo-1683140589868-4f9b38110050?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        checkinTime: new Date('1-Jan-2024'),
        checkoutTime: new Date('7-Jan-2024'),
        rating: 4.2,
      },
      {
        roomNumber: 3,
        roomType: 'Deluxe 1 Room',
        amenities: 'Air Conditioner, Free Wi-Fi+, TV',
        price: 1000,
        photos:
          'https://plus.unsplash.com/premium_photo-1683140589868-4f9b38110050?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        checkinTime: new Date('1-Jan-2024'),
        checkoutTime: new Date('7-Jan-2024'),
        rating: 4.7,
      },
      {
        roomNumber: 4,
        roomType: 'Private Suite',
        amenities: 'Air Conditioner, Free Wi-Fi+, TV',
        price: 15000,
        photos:
          'https://plus.unsplash.com/premium_photo-1683140589868-4f9b38110050?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        checkinTime: new Date('1-Jan-2024'),
        checkoutTime: new Date('7-Jan-2024'),
        rating: 3.9,
      },
    ];
  }

  toggle() {
    // this.hideRooms = !this.hideRooms;
    if (this.title == 'Room List') {
      this.title = 'Rooms List';
    } else {
      this.title = 'Room List';
    }
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }

  addRoom() {
    const room: RoomList = {
      roomNumber: 5,
      roomType: 'Deluxe',
      amenities: 'Included',
      price: 500,
      photos:
        'https://plus.unsplash.com/premium_photo-1683140589868-4f9b38110050?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      checkinTime: new Date('1-Jan-2024'),
      checkoutTime: new Date('7-Jan-2024'),
      rating: 4.9,
    };

    // this.roomList.push(room); immuteble principle ?
    this.roomList = [...this.roomList, room];
  }
}
