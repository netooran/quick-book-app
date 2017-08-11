import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { ToastController } from 'ionic-angular';

@Injectable()
export class ToastProvider {

  constructor(public toastCtrl: ToastController) {
  }

  booked(room) {
    this.presentToast(`Successfully booked ${room.name}`)
  }

  bookingEnded(room) {
    this.presentToast(`Successfully canceled ${room.name}`)
  }

  presentToast(message) {
    let toast = this.toastCtrl.create({
      message,
      duration: 3000,
      position: 'bottom'
    }).present();
  }

}
