import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ActionsService {
	query;
  constructor(private db: AngularFireDatabase) { }

  getActions(id:string) :FirebaseListObservable<any> {

  	this.query = this.db.list('action/');
  	this.query.subscribe(console.log);
  	return this.query;
  }

}
