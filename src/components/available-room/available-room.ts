import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { RoomPage} from '../../pages/room/room'
import { BookingPage } from '../../pages/booking/booking';
import { RoomProvider } from '../../providers/room/room';

@Component({
  selector: 'available-room',
  templateUrl: 'available-room.html'
})
export class AvailableRoomComponent extends RoomPage {

  constructor(public nav: NavController, public navParams: NavParams, public roomProvider: RoomProvider) {
    super(nav, navParams, roomProvider);
  }

  book() {
    this.nav.push(BookingPage, { room: this.room });
  }

}
