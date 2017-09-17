import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';
import { Subject } from 'rxjs';
import { Action } from './action';

@Injectable()
export class LoaderService {

	actions: FirebaseListObservable<any[]>;
	fundees: FirebaseListObservable<any[]>;
	
	public fundeeList: any[];
	public actionList: Action[];
	public fundeeMap: { [key:string]:string; } = {};


	constructor(private db: AngularFireDatabase){
		this.actions = db.list('/action');
  		this.fundees = db.list('/fundee');
  		console.log("Loading ...");
  		console.log(this.fundeeMap);
  		// Subscribe to changes in the entities.
	  	this.actions.subscribe((actions) => {
	  		this.actionList = actions;
	  	});
		 this.fundees.subscribe((fundees) => {
	  		this.fundeeList = fundees;
	  		this.loadfDict();
	  	});

		 
	}

 //  loadAData(){

	// this.actions.subscribe(actions =>{
	// 	this.actionList = actions;
	// 	console.log(this.actionList);
	// });
	// return this.actionList;
	// }

	// loadFData(){
	//   	this.fundees.subscribe(fundees => {
	//   		this.fundeeList = fundees;
	//   		console.log(this.fundeeList);
	  		
	//   	});
	//   	return this.fundeeList;
	//  }

	loadfDict() {

		for (let fundee of this.fundeeList){
			if (!this.fundeeMap[fundee.id]){

				this.fundeeMap[fundee.id] = fundee.fundeeName;
				console.log(this.fundeeMap[fundee.id]); 
			}
		}
	}

}
