import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MenuComponent} from './menu/menu.component';
import { AppComponent } from './app.component';
import {MainComponent} from './main/main.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES, APP_ROUTES_PROVIDER } from './app.routes';
import {DashboardComponent} from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MainComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  APP_ROUTES,
  ],
  providers: [APP_ROUTES_PROVIDER],
  bootstrap: [AppComponent]
})
export class AppModule { }
