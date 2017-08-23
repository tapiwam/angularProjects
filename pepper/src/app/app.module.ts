import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';

export const firebaseConfig = {
    apiKey: "AIzaSyB2kaRZ376HzAQK_-W0vd_1eeWsvLRpqXU",
    authDomain: "pepper-6dd81.firebaseapp.com",
    databaseURL: "https://pepper-6dd81.firebaseio.com",
    storageBucket: "pepper-6dd81.appspot.com",
    messagingSenderId: "980021221281"
  };

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
