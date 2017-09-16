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

export class ActionComponent{}

