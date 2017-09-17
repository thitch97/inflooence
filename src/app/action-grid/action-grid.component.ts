import { Component, OnInit, OnChanges} from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';
import { Subject } from 'rxjs/Subject';
import {LoaderService } from '../loader.service';


@Component({
  selector: 'app-action-grid',
  templateUrl: './action-grid.component.html',
  styleUrls: ['./action-grid.component.css'],
  providers: [LoaderService]
})
export class ActionGridComponent {

	aResult: any;
	fResult: any;
	//fundeeMap : {[key:string]:string;} = {};

  constructor(private db: AngularFireDatabase, private loader: LoaderService) {}
  
  get actions() {
  	return this.loader.actionList;
  }

  get fundees() {
  	return this.loader.fundeeList;
  }

  get fmap() {
  	return this.loader.fundeeMap;
  }

  // search(name:string){

  // 	if (this.loader.actionList != null){
	 //  	for (let action of this.loader.actionList){
	 //  		console.log(action);
	 //  		if (action.actionName == name ){
	 //  			this.aResult = action;

	 //  		}
	 //  	}

	 //  	for (let fundee of this.loader.fundeeList){
	 //  		if (this.aResult.fundeeId == fundee.id){
	 //  			this.fResult = fundee;
	 //  		}
	 //  	}
  // 	}
  
  // }


}
