import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-booking',
  templateUrl: 'booking.html',
})
export class BookingPage {
  public room;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.room = navParams.get('room');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookingPage');
  }

}