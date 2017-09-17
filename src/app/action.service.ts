import { Injectable } from '@angular/core';
import { Action } from './action';
import { LoaderService } from "./loader.service";



@Injectable()
export class ActionService {

  constructor(private loader: LoaderService) { }

  getActions(): Promise<Action[]> {
  	
  	return Promise.resolve(this.loader.actionList);
  }

  getAction(id:string) : Promise<Action> {

  	return this.getActions()
  	.then(actions => actions.find(action => action.id === id));
  }

}
