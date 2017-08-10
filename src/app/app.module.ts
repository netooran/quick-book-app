import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { RoomPage } from '../pages/room/room';
import { BookingPage } from '../pages/booking/booking';

import { AvailableRoomComponent } from '../components/available-room/available-room';
import { BookedRoomComponent } from '../components/booked-room/booked-room';

import { RoomProvider } from '../providers/room/room';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RoomPage,
    BookingPage,
    AvailableRoomComponent,
    BookedRoomComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RoomPage,
    BookingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RoomProvider
  ]
})
export class AppModule {}
