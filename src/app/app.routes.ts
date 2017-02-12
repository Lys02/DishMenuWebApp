import {MainComponent} from './main/main.component';
import {MenuComponent} from './menu/menu.component';
//import {RestaurantComponent} from './restaurant-profile/restaurant.component';
import {Routes, RouterModule} from "@angular/router"


 const routes:Routes=[
   {  path:'main',
      component:MainComponent,
      children:[
     {
        path:'menu',
        component:MenuComponent
    },
    /* {
       path:'/restaurant',
       component:RestaurantComponent
     }*/
   ],
 }
 ];
 export const APP_ROUTES_PROVIDER: any[] = [];

export const APP_ROUTES: any = RouterModule.forRoot(routes);

 //export const APP_ROUTES_PROVIDER: any = RouterModule.forRoot(APP_ROUTES);

/* export const APP_ROUTES_PROVIDER=[
   provideRouter(APP_ROUTES)
 ];*/
