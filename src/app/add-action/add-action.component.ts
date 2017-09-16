import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-add-action',
  templateUrl: './add-action.component.html',
  styleUrls: ['./add-action.component.css']
})
export class AddActionComponent {

  action: FirebaseListObservable<any>;
  constructor(db: AngularFireDatabase) {
  	this.action = db.list('/action');
  }

  save(fundeeId, actionName, categories, date, description, id, referenceId, status, thumbnailUrl){
  	this.action.push({
  		fundeeId: fundeeId,
  		actionName: actionName,
  		categories: categories,
  		date: date,
  		description: description,
  		id: id,
  		referenceId: referenceId,
  		status: status,
  		thumbnailUrl: thumbnailUrl
  	})
  }

}
