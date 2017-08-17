import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Keyboard } from 'ionic-angular';

import { RoomProvider } from '../../providers/room/room';
import { ToastProvider } from '../../providers/toast/toast';
import { RoomPage } from '../room/room';

@IonicPage()
@Component({
  selector: 'page-booking',
  templateUrl: 'booking.html',
})
export class BookingPage {
  public room;
  public durations = [5, 10, 15, 30];
  public selectedDuration;
  public employee;

  constructor(public navCtrl: NavController, public navParams: NavParams, public keyboard: Keyboard, private roomProvider: RoomProvider, private toast: ToastProvider) {
    this.room = navParams.get('room');
    // keyboard.willShow();
  }

  ionViewDidLoad() {
  }

  book() {    
    this.roomProvider
      .book(this.room, this.selectedDuration, this.employee)
      .subscribe(data => {
        this.toast.booked(this.room)
        this.navCtrl.push(RoomPage, { room: this.room });
      });
  }

  selectDuration(duration) {
    this.selectedDuration = duration;
  }

}
