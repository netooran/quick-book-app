import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { RoomProvider } from '../../providers/room/room';
import { ToastProvider } from '../../providers/toast/toast';
import { RoomPage } from '../room/room';

@IonicPage()
@Component({
  selector: 'page-booking',
  templateUrl: 'booking.html'
})
export class BookingPage {

  @ViewChild('empIdInput') myInput;
  public room;
  public durations = [5, 10, 15, 30];

  public booking = {
    duration: this.durations[0].toString(),
    employeeId: ''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private roomProvider: RoomProvider, private toast: ToastProvider) {
    this.room = navParams.get('room');
  }

  ionViewDidEnter() {
    setTimeout(() => this.myInput.setFocus(), 0);
  }

  book() {
    this.roomProvider
      .book(this.room, this.booking)
      .subscribe(data => {
        this.toast.booked(this.room)
        this.navCtrl.push(RoomPage, { room: this.room });
      });
  }
}
