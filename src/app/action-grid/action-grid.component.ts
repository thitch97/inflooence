import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';
import { Subject } from 'rxjs/Subject';
import { ActionsService } from '../actions.service';

@Component({
  selector: 'app-action-grid',
  templateUrl: './action-grid.component.html',
  styleUrls: ['./action-grid.component.css'],
  providers: [ActionsService]
})
export class ActionGridComponent implements OnInit {

	actions: FirebaseListObservable<any[]>;
	fundees: FirebaseListObservable<any[]>;
	fundeeList: any[];
	actionList: any[];
	idSubject: Subject<any>;
	id: string;
	aResult: any;
	fResult: any;
	//fundeeMap : {[key:string]:string;} = {};

  constructor(private db: AngularFireDatabase, private actionSvc:ActionsService) {

  	this.idSubject = new Subject();
  	this.actions = db.list('/action');
  	this.fundees = db.list('/fundee');
  }

  ngOnInit() {

  	this.actions.subscribe(actions =>{
  		this.actionList = actions;
  		console.log(this.actionList);
  	});

  	this.fundees.subscribe(fundees => {
  		this.fundeeList = fundees;
  		console.log(this.fundeeList);
  	})
  }

  search(id:string){

  	if (this.actionList != null){
	  	for (let action of this.actionList){
	  		console.log(action);
	  		if (action.id == id){
	  			this.aResult = action;

	  		}
	  	}

	  	for (let fundee of this.fundeeList){
	  		if (this.aResult.fundeeId == fundee.id){
	  			this.fResult = fundee;
	  		}
	  	}
  	}
  
  }


}
