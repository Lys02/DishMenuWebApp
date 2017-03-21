import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MenuComponent} from './menu/menu.component';
import { AppComponent } from './app.component';
import {MainComponent} from './main/main.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES, APP_ROUTES_PROVIDER } from './app.routes';
import {DashboardComponent} from './dashboard/dashboard.component';
import {MenuGroupComponent} from './menuGroup/menu-group.component';
import {MenuService} from './services/menu.service';
import {MenuGroupService} from './services/menuGroup.service';
import {EmitterService} from './emitter.service';
import {MenuBoxComponent} from './menu/menu-box/menu-box.component';
import {MenuGroupBoxComponent} from './menuGroup/menuGroup-box/menuGroup-box.component';
import { MaterialModule } from '@angular/material';
import {DishesComponent} from './dishes/dishes.component';
import {DishesBoxComponent} from './dishes/dishes-box/dishes-box.component';
import {DishesService} from './services/dishes.service';
import {DishesFormComponent} from './dishes/dishes-form/dishes-form.component';
import 'hammerjs';
import { LoginPageComponent } from './login-page/login-page.component';
import {AF} from './providers/af';
import {AngularFireModule} from 'angularfire2';
import {AngularFire, AuthProviders, AuthMethods,FirebaseUrl} from 'angularfire2'


export const firebaseConfig = {
    apiKey: "AIzaSyCBUbJVSL3ij41LLOxOcMyPEiS62_FQXvo",
    authDomain: "fir-test-a7922.firebaseapp.com",
    databaseURL: "https://fir-test-a7922.firebaseio.com",
    storageBucket: "fir-test-a7922.appspot.com",
    messagingSenderId: "341328460843"
};
const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
};

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MainComponent,
    DashboardComponent,
    MenuGroupComponent,
    MenuBoxComponent,
    MenuGroupBoxComponent,
    DishesComponent,
    DishesBoxComponent,
    DishesFormComponent,
    LoginPageComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
  APP_ROUTES,
  MaterialModule,
  AngularFireModule.initializeApp(firebaseConfig,myFirebaseAuthConfig)
  ],


  providers: [APP_ROUTES_PROVIDER,MenuService,MenuGroupService,EmitterService,DishesService,AF,AngularFire],
  bootstrap: [AppComponent]
})
export class AppModule { }
