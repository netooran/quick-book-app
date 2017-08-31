import { Component, ViewChild } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';
import { Storage } from '@ionic/storage';

import { HomePage } from '../pages/home/home';
import { RoomPage } from "../pages/room/room";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HomePage;
  @ViewChild('myNav') nav: NavController

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private idle: Idle, private storage: Storage) {
    platform.ready().then(() => {
      statusBar.hide();
      splashScreen.hide();
    });

    this.initIdle();
  }

  reset() {
    this.idle.watch();
  }

  initIdle() {
    this.idle.setIdle(5);
    this.idle.setTimeout(5);
    this.idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);
    this.idle.onTimeout.subscribe(() => {
      this.storage.get('defaultRoom')
        .then((room) => {
          if (!room)
            return;
          else if (this.nav.getActive().data.room && this.nav.getActive().data.room.name == room.name)
            return;
          this.nav.setRoot(RoomPage, { room: room });
        });
      this.reset();
    });

    this.reset();
  }
}
