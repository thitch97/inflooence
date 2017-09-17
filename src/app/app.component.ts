import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { LoaderService } from './loader.service';
import { ActionService } from './action.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoaderService, ActionService]
})
export class AppComponent {

  title = 'app';
}
