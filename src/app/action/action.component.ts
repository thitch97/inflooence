import { Component, OnInit, OnChanges } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';
import { Subject } from 'rxjs/Subject';
import { ActionsService } from '../actions.service';


@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css'],
  providers: [ActionsService]
})
export class ActionComponent implements OnInit {

	actions: FirebaseListObservable<any[]>;
	actionList: any[];
	idSubject: Subject<any>;
	id: string;
	result: any;

  constructor(private db: AngularFireDatabase, private actionSvc:ActionsService) {

  	this.idSubject = new Subject();
  	this.actions = db.list('/action');
  }

  ngOnInit() {

  	this.actions.subscribe(actions =>{
  		this.actionList = actions;
  		console.log(this.actionList);
  	});
  }

  search(id:string){

  	if (this.actionList != null){
	  	for (let action of this.actionList){
	  		console.log(action);
	  		if (action.id == id){
	  			this.result = action;
	  		}
	  	}
  	}
  	console.log(this.result);
  }


}
