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
import { MainmenuComponent } from './mainmenu/mainmenu.component';
import { AboutComponent } from './about/about.component';
import { SponsorComponent } from './sponsor/sponsor.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
   { path: '', component: ActionGridComponent },
   { path: 'action/:id', component: ActionComponent },
   { path: 'create', component: PostmanagerComponent },
   { path: 'action/edit', component: PostmanagerComponent },
   { path: 'about', component: AboutComponent },
   { path: 'sponsor', component: SponsorComponent },
   { path: 'register', component: SignupComponent },
   { path: 'login', component: LoginComponent },
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
    PostmanagerComponent,
    MainmenuComponent,
    AboutComponent,
    SponsorComponent,
    SignupComponent,
    LoginComponent,
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
