import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { PreferencePage } from '../preference/preference';
import { RoomPage } from "../room/room";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
  }

  ionViewDidLoad() {
    setTimeout(() => {
      this.storage.get('defaultRoom').then((room) => {
        room
          ? this.navCtrl.setRoot(RoomPage, { room: room })
          : this.navCtrl.setRoot(PreferencePage);
      });
    }, 2000);
  }

}
