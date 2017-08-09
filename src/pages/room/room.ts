import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-room',
  templateUrl: 'room.html',
})
export class RoomPage {
  public room;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.room = navParams.get('room');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RoomPage');
  }

}
