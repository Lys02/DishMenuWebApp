import { Component } from '@angular/core';
import {MainComponent} from'./main/main.component';
import {AF} from './providers/af';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	public isLoggedIn: boolean;

	constructor(public afservice: AF, private router: Router){
		
		this.afservice.af.auth.subscribe(
				(auth) => {
					if(auth == null){
						console.log('Not Logged in');
						this.router.navigate(['login']);
						this.isLoggedIn = false;
					}
					else{
						console.log('loggend in');
						this.isLoggedIn = true;
						this.router.navigate(['main/dashboard']);
					}
				}

			);


	}

	logout(){
		this.afservice.logout();
	}
}
