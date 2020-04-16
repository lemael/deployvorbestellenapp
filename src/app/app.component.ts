import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vorbestellen';
  constructor(){
    const firebaseConfig = {
      apiKey: "AIzaSyDS20WefM9LPOEd7eKDNzbFrgdmoeeLN_w",
      authDomain: "vorbestellen.firebaseapp.com",
      databaseURL: "https://vorbestellen.firebaseio.com",
      projectId: "vorbestellen",
      storageBucket: "vorbestellen.appspot.com",
      messagingSenderId: "159188260122",
      appId: "1:159188260122:web:13ee4397e60c1c357588a3",
      measurementId: "G-1Y25GM4ZE1"
    };
    firebase.initializeApp(firebaseConfig);
  }
}
