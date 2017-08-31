import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as moment from 'moment';

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
  public roomStatus;
  public maxDuration = 30;

  public booking = {
    duration: 10,
    employeeId: ''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private roomProvider: RoomProvider, private toast: ToastProvider) {
    this.room = navParams.get('room');
    this.roomStatus = navParams.get('roomStatus');
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

  getMaxDuration() {
    var roomStatus = this.roomStatus;
    let duration = moment.duration(moment(roomStatus.start).diff(moment(new Date())), 'milliseconds').asMinutes();
    let maxDuration = this.maxDuration < duration ? this.maxDuration : duration;
    this.booking.duration = this.booking.duration < maxDuration ? this.booking.duration : maxDuration;
    return maxDuration;
  }

  back() {
    this.navCtrl.pop();
  }
}
