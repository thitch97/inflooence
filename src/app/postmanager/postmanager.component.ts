import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../loader.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Action } from '../action';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-postmanager',
  templateUrl: './postmanager.component.html',
  styleUrls: ['./postmanager.component.css'],
  providers: [LoaderService]
})
export class PostmanagerComponent implements OnInit{

	actions:FirebaseListObservable<any>;
	nAction: Action;
	categories =  ['Education', 'Environmental', 'Animal', 'Arts & Culture', 'International NGO', 'Health' ];

	constructor(db: AngularFireDatabase, private loader: LoaderService) {
	}

	ngOnInit(){
		this.nAction = {
			actionName: '',
			categories: [],
			date: '',
			descLong: '',
			descShort: '',
			fundeeId: '',
			id: '',
			referenceId: '',
			status: '',
			thumbnailUrl: ''
		}
	}

	save(actionName:string, fundeeId:string){

		this.nAction.actionName = actionName;
		this.nAction.fundeeId = fundeeId;
		this.actions.push(this.nAction);


 	}

}
