import { Component, OnInit } from '@angular/core';
import  {AF} from '../providers/af';
import {Router} from "@angular/router";




@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  providers: [AF]
})
export class LoginPageComponent implements OnInit {
	public userEmail: string;
	public userPassword: string;
  constructor(public afservice:AF , private router: Router) { 

  }
  loginG(){
  	this.afservice.loginWithGoogle().then(
  		(data)=>{
  		this.router.navigate(['main/dashboard']);
  	})

  	

  }

  // loginR(){
  //   this.afservice.regularLogin(this.userEmail, this.userPassword).then(
  //     (data)=>{
  //       this.router.navigate(['main/dashboard']);
  //     })
  // }


  ngOnInit() {
  }

}
