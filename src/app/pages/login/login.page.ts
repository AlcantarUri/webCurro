import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
//import { MapaunoPage } from '../mapauno/mapauno.page';
import { NavController, ToastController, LoadingController, PopoverController} from '@ionic/angular';
import { LoadingOptions } from '@ionic/core';
import { Router } from '@angular/router';
import { delay, async } from 'q';
<<<<<<< HEAD
import { AuthService } from 'src/app/services/auth.service';
=======
>>>>>>> e4c8cf097a827c039b617ca71ddba3e036add2ae

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuer: string;
  conprasena: string;
  arregloRecibido: any;
  lambdaResponse : any;

  loadingLogin : boolean;

  constructor(
    public http : HttpService,
    public navCtrl : NavController,
    public toastCtrl : ToastController,
    public loadingCtrl : LoadingController,
    public router : Router,
<<<<<<< HEAD
    public popover : PopoverController,
    public auth: AuthService
=======
    public popover : PopoverController
>>>>>>> e4c8cf097a827c039b617ca71ddba3e036add2ae
  ) {

      this.loadingLogin = false;

   }

  ngOnInit() {
  }

  navegar2(){
    this.navCtrl.navigateRoot('mapaprueba');
  }
  
  registrouno(){
    this.navCtrl.navigateForward('registrartres');
  }
  async prueba(){
    this.mostrarLoading("Calling to to Amazon por favor espere");
    await this.http.pruebaLambda(this.usuer).then((res)=>{

      console.log(res);
      this.lambdaResponse = res['tu-edad'];
      
      this.dismiss();
      this.presentToast(this.lambdaResponse,"middle");
      

    },(error)=>{
      console.log("Error"+JSON.stringify(error));
        alert("Verifica que cuentes con internet");
        this.dismiss();
    })

  }

  delete(){
    this.http.pruebaDeleteLambda().then(
      (res)=>{

      console.log(res);
      this.presentToast(String(res), "middle");
      

    },(error)=>{
      console.log("Error"+JSON.stringify(error));
        alert("Verifica que cuentes con internet");
        this.dismiss();
    })


  }

  get(){
    this.http.pruebaGetLambda().then(
      (res)=>{

      console.log(res);
      this.presentToast(String(res), "middle");
      

    },(error)=>{
      console.log("Error"+JSON.stringify(error));
        alert("Verifica que cuentes con internet");
        this.dismiss();
    })
  }
  eventoDuno(){
    alert("alerta uno");
  }
  eventoDDos(){
    alert("alerta dos");
  }

  async navegar(){

    this.mostrarLoading("Iniciando Sesion");

    console.log(this.usuer);
    console.log(this.conprasena);
    
    if (!this.usuer) {
      this.presentToast("Por favor ingresa un usuario","bottom");
      this.dismiss();
      
      
    }else if (!this.conprasena) {
      this.presentToast("Por favor ingrese una contraseña","bottom");
     // this.dismiss();
    }else{
    this.http.loginChido(this.usuer,this.conprasena).then(
      (res)=>{

       
        this.arregloRecibido = res["Usuario"];
        
        console.log(this.arregloRecibido);

        for(let entry of this.arregloRecibido){
          var usuario = entry.registrated_name;
          var contra = entry.registrated_password;
        }
        


        
        if(usuario != this.usuer ){
          this.presentToast("Usuario o contraseña incorrecta","bottom");
         // this.dismiss();
          
        }else if (contra != this.conprasena) {
          this.presentToast("Contraseña incorrecta","bottom");
         // this.dismiss();
          
        }else if (usuario === this.usuer && contra === this.conprasena) {
          //navegando a segunda pestaña si usuario y contraseña coinciden
          this.presentToast("BIENVENIDO","top");
          this.router.navigateByUrl('/mapauno');
          //this.navCtrl.navigateForward('mapauno');
         // this.dismiss();
          
        }else{
          this.presentToast("Algo salio mal contaque al ingeniero", "middle")
          //this.dismiss();
        }
        

      },(error)=>{
      console.log("Error"+JSON.stringify(error));
        alert("Verifica que cuentes con internet");
        this.dismiss();
    })
  }
  }

  async presentToast(mensaje : string, pos: any) {
    const toast = await this.toastCtrl.create({
      message : mensaje,
      position : pos,
      duration : 2000
    });
    toast.present();
    
  }

 async mostrarLoading(mensaje : string){

    const loading = await this.loadingCtrl.create({
      message: mensaje,
      spinner: "dots"
    });
    
    loading.present();

    if (this.loadingLogin == true) {
      await delay(1300);
     await loading.dismiss().then(() => 
      console.log('Adios'));
    }
  }

  async dismiss() {
   this.loadingLogin = true;
    return this.loadingCtrl.dismiss().then(() => 
    console.log('Apagado'));
  }

  obtenerTodos(){
    this.http.obtenerRegistros().then((inv)=>{


      console.log(inv);
    },(error)=>{
      console.log(error);
    })
  }
<<<<<<< HEAD
  loginCognito(){
    this.auth.signIn(this.usuer, this.conprasena);
    
  }
=======
>>>>>>> e4c8cf097a827c039b617ca71ddba3e036add2ae

  loginChido(){
    console.log(this.usuer);
    console.log(this.conprasena);
    this.http.inicioSesion(this.usuer, this.conprasena).then((inv)=>{
      
      console.log(inv);

    },(err)=>{
      console.log(err);
    })
  }

<<<<<<< HEAD
  validar(){
    this.router.navigateByUrl('validacion');
  }

=======
>>>>>>> e4c8cf097a827c039b617ca71ddba3e036add2ae

}
