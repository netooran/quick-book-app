import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';
import { ComponentsModule } from '../components/components.module'

import { MyApp } from './app.component';

import { HomePageModule } from '../pages/home/home.module';
import { PreferencePageModule } from '../pages/preference/preference.module';
import { RoomPageModule } from '../pages/room/room.module';
import { BookingPageModule } from '../pages/booking/booking.module';

import { RoomProvider } from '../providers/room/room';
import { ToastProvider } from '../providers/toast/toast';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicStorageModule.forRoot(),
    NgIdleKeepaliveModule.forRoot(),
    IonicModule.forRoot(MyApp),
    HomePageModule,
    PreferencePageModule,
    RoomPageModule,
    BookingPageModule,
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    RoomProvider,
    ToastProvider
  ]
})
export class AppModule { }
