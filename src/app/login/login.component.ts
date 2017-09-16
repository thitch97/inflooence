import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

	items: FirebaseListObservable<any[]>;
  	user: Observable<firebase.User>;

  constructor(db:AngularFireDatabase,public afAuth: AngularFireAuth) {
  	this.user = afAuth.authState;
  }
  
  loginG(){
		this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
	}

	//logs the user in with Facebook
	loginF(){
		this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
	}

	logout(){
		this.afAuth.auth.signOut();
	}


}
