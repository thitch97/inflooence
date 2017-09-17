import { Component, OnInit, OnChanges } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';
import { Subject } from 'rxjs/Subject';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { ActionService } from '../action.service';
import { LoaderService } from '../loader.service';
import 'rxjs/add/operator/switchMap';
import { Action } from '../action';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css'],
  providers: [ActionService, LoaderService]
})

export class ActionComponent{

	public action: Action;
	public fundeeM;
	

	constructor(
		private actionSvc: ActionService,
		private route: ActivatedRoute,
		private location: Location,
		private loaderService:LoaderService
	) {
		this.route.paramMap.switchMap((params: ParamMap) =>
			this.actionSvc.getAction(params.get('id'))).subscribe(action => 
			{
				this.action = action;
				this.fundeeM = this.loaderService.fundeeMap;

			});
	}

	
}

