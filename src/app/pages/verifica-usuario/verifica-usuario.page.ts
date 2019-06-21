import { Component, OnInit } from '@angular/core';
import { LoadingController, AlertController, NavController, ToastController } from '@ionic/angular';
import { delay, async } from 'q';

@Component({
  selector: 'app-verifica-usuario',
  templateUrl: './verifica-usuario.page.html',
  styleUrls: ['./verifica-usuario.page.scss'],
})
export class VerificaUsuarioPage implements OnInit {

confirmado: boolean;
claveEscuela: string;
claveAlumno: string;
loadingLogin : boolean;
isEscuelaOk: boolean;
isAlumnoOk:boolean;

  constructor(
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private navCtrl: NavController,
    private toastCtrl: ToastController
  ) { 

    this.confirmado= false;
    this.isEscuelaOk = false;
    this.isAlumnoOk = false;
  }

  ngOnInit() {
  }

  async verificarEscuela(){
    
    if(!this.claveEscuela){
      this.presentToast("Introduce clave de la escuela","bottom");
      this.isEscuelaOk= false;
    }else{
      this.mostrarLoading("Verificando Clave de Escuela.");
      this.isEscuelaOk= true;
      this.dismiss();
    }
    
    
    
  }

  async verificarAlumno(){
    
    if (!this.claveAlumno) {

        this.presentToast("introduce clave del Alumno", "bottom");
        this.isAlumnoOk = false;

    }else{

        this.mostrarLoading("Verificando Clave del Alumnos.");
        this.isAlumnoOk= true;
        this.dismiss();

    if (this.isAlumnoOk==true && this.isEscuelaOk==true) {

        this.confirmado=true;
        

    }
  }
  }

  async mostrarLoading(mensaje : string){

    const loading = await this.loadingCtrl.create({
      message: mensaje,
      spinner: "dots"
    });
    
    loading.present();

    if (!this.loadingLogin) {
      await delay(1300);
     await loading.dismiss().then(() => 
      console.log('Adios'));
    }
  }

  async dismiss() {
   this.loadingLogin = false;
    return this.loadingCtrl.dismiss().then(() => 
    console.log('Apagado'));
  }


  continuar(){
    this.navCtrl.navigateForward('registraruno');
  }

  async presentToast(mensaje: string, pos: any) {
    const toast = await this.toastCtrl.create({
      message: mensaje,
      duration: 2000,
      position: pos
    });
    toast.present();
  }
}
