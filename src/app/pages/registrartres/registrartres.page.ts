import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, ToastController } from '@ionic/angular';
import { delay, async } from 'q';
import { HttpSentEvent } from '@angular/common/http';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-registrartres',
  templateUrl: './registrartres.page.html',
  styleUrls: ['./registrartres.page.scss'],
})
export class RegistrartresPage implements OnInit {


  pass1: string;
  pass2: string;
  usuario: string;

  loadingLogin : boolean;
  

  constructor(
    private navCtrl : NavController,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private http : HttpService
  ) { 

    this.loadingLogin == false;
  }

  ngOnInit() {
  }

  registrarUsuario(){
    this.http.insertarUsuario(this.usuario, this.pass1).then((inv)=>{

      console.log(inv);
      
    },(error)=>{
      alert("Errosillo");
    })
  }

  retornologin(){
    this.navCtrl.navigateBack('verifica-usuario');
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
  async esconderLogin(mensajetoToast: string, pos: string, color:string) {
    this.loadingLogin = true;
     return this.loadingCtrl.dismiss().then(() => 
     
     this.presentToast(mensajetoToast, pos, color)     )
     
     ;
   }
   verificarUsuario(){
     this.mostrarLoading("Verificando disponibilidad de usuario");
     if (!this.usuario) {
       this.esconderLogin("Ingresar un Usuario", "bottom", "danger");
     }else {
       this.esconderLogin("Usuario disponible","top","primary")
     }
   }

   verificarPass(){
     if (!this.pass1) {
       this.presentToast("Favor de Ingresar una contraseña","middle","danger");
     }else if (this.pass1 === this.pass2) {
       this.navCtrl.navigateRoot('login');
       this.presentToast("Bienvenido usuario","bottom","secondary")
       this.registrarUsuario();
     }else {
       this.presentToast("Las contraseñas no coinciden","middle","dager");
       this.pass1 = "";
       this.pass2 = "";
     }
   }

   async presentToast(mensaje : string, pos: any, color: any) {
    const toast = await this.toastCtrl.create({
      message : mensaje,
      position : pos,
      duration : 2000,
      color: color
    });
    toast.present();
    
  }


}
