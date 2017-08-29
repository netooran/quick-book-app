import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';

import { RoomPage } from '../../pages/room/room'
import { RoomProvider } from '../../providers/room/room';
import { ToastProvider } from '../../providers/toast/toast';

@Component({
  selector: 'booked-room',
  templateUrl: 'booked-room.html'
})
export class BookedRoomComponent extends RoomPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public roomProvider: RoomProvider, private toast: ToastProvider, public events: Events) {
    super(navCtrl, navParams, roomProvider);
    events.subscribe('timer:ended', () => {
      this.updateRoomStatus();
    });
  }

  endMeeting() {
    this.roomProvider
      .cancel(this.room, this.roomStatus)
      .subscribe(data => {
        this.toast.bookingEnded(this.room);
        this.navCtrl.setRoot(RoomPage, { room: this.room });
      });
  }

  isQuickMeet() {
    return this.roomStatus && this.roomStatus.isQuickBookMeeting;
  }

}
