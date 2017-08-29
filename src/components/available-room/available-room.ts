import { Component } from '@angular/core';

import { RoomPage} from '../../pages/room/room'
import { BookingPage } from '../../pages/booking/booking';

@Component({
  selector: 'available-room',
  templateUrl: 'available-room.html'
})
export class AvailableRoomComponent extends RoomPage {

  onSwipe() {
    this.nav.push(BookingPage, { room: this.room });
  }

  getImage() {
    return this.room && this.room.images && this.room.images.available_url;
  }

}
