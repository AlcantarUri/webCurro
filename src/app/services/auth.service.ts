import { Injectable } from '@angular/core';
import { CognitoUserPool, CognitoUserAttribute, CognitoUser, AuthenticationDetails, CognitoUserSession } from 'amazon-cognito-identity-js';
import { Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';

const POOL_DATA = {
  UserPoolId:'us-east-1_JxTeKBEvz',
  ClientId:'21942dm48j5amhkrsrhoumuln2'
};
const userPool = new CognitoUserPool(POOL_DATA);

@Injectable({
  providedIn: 'root'
})
export class AuthService {


 usuario: string;

  constructor(
    public router: Router,
    public navCtrl: NavController,
    public toastCtrl : ToastController
  ) { }


  confirmUser(username: string, code: string){
    const userData = {
      Username: username,
      Pool: userPool
    };
    const cognitUser = new CognitoUser(userData);
    cognitUser.confirmRegistration(code, true, (err, result)=>{
      if (err) {
        console.log("error en confirmacion de registro");
      }else{
        console.log("todo chido dos");
        this.router.navigate(['login']);
      }
    });
  }

  

  signIn(username: string, password: string){
    const authData = {
      Username: username,
      Password: password
    };
    const authDetails = new AuthenticationDetails(authData);
    const userData = {
      Username : username,
      Pool: userPool
    };
    const cognitoUser = new CognitoUser(userData);
    const that = this;
    cognitoUser.authenticateUser(authDetails, {
      onSuccess (result: CognitoUserSession) {

          that.router.navigate(['mapaprueba']);
          

         
          
      },
      onFailure (err) {

        console.log(err);
        that.ToastChido("Usuario o contraseña incorrectos!!", "danger")

      }
    })

  }


  getUser(){
    var array = {};
    array = userPool.getCurrentUser();

    return array
  }

  
  async ToastChido(texto: string, colorful: any){
    let toast = await this.toastCtrl.create({
     message: texto,
     duration: 3000,
     position: 'bottom',
     color: colorful
   });
   toast.present();
 }

}
