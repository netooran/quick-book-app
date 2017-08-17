import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';

import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { PreferencePage } from '../pages/preference/preference';
import { RoomPage } from '../pages/room/room';
import { BookingPage } from '../pages/booking/booking';

import { AvailableRoomComponent } from '../components/available-room/available-room';
import { BookedRoomComponent } from '../components/booked-room/booked-room';

import { RoomProvider } from '../providers/room/room';
import { ToastProvider } from '../providers/toast/toast';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PreferencePage,
    RoomPage,
    BookingPage,
    AvailableRoomComponent,
    BookedRoomComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    NgIdleKeepaliveModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PreferencePage,
    RoomPage,
    BookingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RoomProvider,
    ToastProvider
  ]
})
export class AppModule {}
