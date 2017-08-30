import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import * as schedule from 'node-schedule';
import { RoomProvider } from '../../providers/room/room';

import { PreferencePage } from '../../pages/preference/preference';

@Component({
  selector: 'page-room',
  templateUrl: 'room.html',
})
export class RoomPage {
  public room;
  public roomStatus;

  constructor(public nav: NavController, public navParams: NavParams, public roomProvider: RoomProvider, public loadingCtrl: LoadingController) {
    this.room = navParams.get('room');
    this.updateRoomStatus();
    schedule.scheduleJob('*/1 * * * *', () => {
      this.updateRoomStatus();
    });
  }

  ngOnInit() {
    this.presentLoadingDefault();
  }

  isAvailable() {
    return this.roomStatus && this.roomStatus.status === 'available';
  }

  showPreference() {
    this.nav.push(PreferencePage);
  }

  updateRoomStatus() {
    return this.roomProvider
      .getRoomStatus(this.room)
      .subscribe((data) => this.roomStatus = data.json());
  }

  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      content: 'please wait...',
      duration: 5000
    });

    loading.present();
  }

}
