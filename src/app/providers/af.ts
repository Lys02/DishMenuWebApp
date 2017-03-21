import {Injectable} from "@angular/core";
import {AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
@Injectable()
export class AF {
  
  constructor(public af: AngularFire) {
    // this.auth = firebase.auth();
  }
  // /**
  //  * Logs in the user
  //  * @returns {firebase.Promise<FirebaseAuthState>}
  //  */
  loginWithGoogle() {
    return this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup,
    });
  }
  //   public regularLogin(userEmail: string, userPassword: string){
  //   return new Promise(
  //     (resolve, reject)=>{
  //       this.auth.signInWithEmailAndPassword(userEmail, userPassword)
  //       .then(userData=>resolve(userData),
  //         err=>reject(err));
  //     });
  // }
 
  logout() {
    return this.af.auth.logout();
  }
}