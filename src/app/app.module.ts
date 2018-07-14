import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';


import { CreatePage } from '../pages/create/create';
import { HomePage } from '../pages/home/home';
import { EditPage } from '../pages/edit/edit';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { StudentProvider } from '../providers/students/student';

@NgModule({
  declarations: [
    MyApp,
    CreatePage,
    HomePage,
      EditPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
      HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CreatePage,
    HomePage,
      EditPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
      StudentProvider
  ]
})
export class AppModule {}
