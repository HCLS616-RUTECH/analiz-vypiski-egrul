import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {environment} from '../environments/environment';
import {registerLocaleData} from "@angular/common";
import ruLocale from '@angular/common/locales/ru';

/* FIREBASE */
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// import { AngularFireModule } from '@angular/fire';
// import { AngularFirestoreModule } from '@angular/fire/firestore';
// import { AngularFireStorageModule } from '@angular/fire/storage';
// import { AngularFireAuthModule } from '@angular/fire/auth';



registerLocaleData(ruLocale, 'ru');

// Initialize Firebase
const app = initializeApp(environment.firebaseConfig);
const analytics = getAnalytics(app);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // AngularFireModule.initializeApp(firebaseConfig),
    // AngularFirestoreModule, // firestore
    // AngularFireAuthModule, // auth
    // AngularFireStorageModule // storage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
