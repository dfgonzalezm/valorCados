import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
<<<<<<< HEAD
import { LoginPage } from '../pages/login/login';
import { RestProvider } from '../providers/rest/rest';
import { HttpClient, HttpClientModule } from '@angular/common/http';
=======
import { RestProvider } from '../providers/rest/rest';
import { LoginPage } from '../pages/login/login';
import { HttpClientModule, HttpClient } from '@angular/common/http';
>>>>>>> 53aab1b2472def171859adfc86192942167b3ce3

@NgModule({
  declarations: [
    MyApp,
    HomePage,
<<<<<<< HEAD
    LoginPage
=======
    LoginPage,
>>>>>>> 53aab1b2472def171859adfc86192942167b3ce3
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
<<<<<<< HEAD
    HttpClientModule
=======
    HttpClientModule,
>>>>>>> 53aab1b2472def171859adfc86192942167b3ce3
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
<<<<<<< HEAD
    LoginPage
=======
    LoginPage,
>>>>>>> 53aab1b2472def171859adfc86192942167b3ce3
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
<<<<<<< HEAD
    RestProvider,
    HttpClient
=======
    HttpClient,
    RestProvider,
    RestProvider
>>>>>>> 53aab1b2472def171859adfc86192942167b3ce3
  ]
})
export class AppModule {}
