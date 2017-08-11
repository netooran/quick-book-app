import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { RoomPage} from '../../pages/room/room'
import { RoomProvider } from '../../providers/room/room';
import { ToastProvider } from '../../providers/toast/toast';

@Component({
  selector: 'booked-room',
  templateUrl: 'booked-room.html'
})
export class BookedRoomComponent extends RoomPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public roomProvider: RoomProvider, private toast: ToastProvider) {
    super(navCtrl, navParams, roomProvider);
  }

  endMeeting() {
    this.roomProvider
      .cancel(this.room)
      .subscribe(data => {
        this.toast.bookingEnded(this.room);
        this.navCtrl.push(RoomPage, { room: this.room });
      });
  }

  isQuickMeet() {
    return this.roomStatus && this.roomStatus.isQuickMeet;
  }

}
