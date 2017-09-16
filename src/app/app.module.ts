import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as firebase from "firebase";
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { ActionGridComponent } from './action-grid/action-grid.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ActionComponent } from './action/action.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { PostmanagerComponent } from './postmanager/postmanager.component';

const appRoutes: Routes = [
   { path: 'action', component: ActionComponent },
   { path: 'action/create', component: PostmanagerComponent },
   { path: 'action/edit', component: PostmanagerComponent },
   { path: '', component: ActionGridComponent },
   { path: '**', component: ErrorComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ActionGridComponent,
    SidebarComponent,
    ActionComponent,
    HomeComponent,
    ErrorComponent,
    PostmanagerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase, 'inflooence'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
