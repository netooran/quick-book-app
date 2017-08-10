import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { BookingPage } from '../booking/booking';

@Component({
  selector: 'page-room',
  templateUrl: 'room.html',
})
export class RoomPage {
  public room;

  constructor(public nav: NavController, public navParams: NavParams) {
    this.room = navParams.get('room');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RoomPage');
  }

  book(){
    this.nav.push(BookingPage, { room: this.room });
  }

}
