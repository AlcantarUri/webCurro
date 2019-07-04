import { Component, OnInit } from '@angular/core';
import { PickerController, NavController, AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registrardos',
  templateUrl: './registrardos.page.html',
  styleUrls: ['./registrardos.page.scss'],
})
export class RegistrardosPage implements OnInit {

  nombreCalle: string;
  numExterior
  numInterior
  fraccionamiento
  codigoPostal
  estado


  constructor(
      private pickerCtrl: PickerController,
      private navCtrl: NavController,
      private alertCtrl: AlertController,
      private toastCtrl: ToastController
  ) { }

  ngOnInit() {
  }

  regresaruno(){
    this.navCtrl.navigateBack('registraruno');
  }

  async ultimoPaso(){
    if (!this.nombreCalle) {
      this.presentToast("Favor de ingresar nombre de la calle","bottom");
    }else if (!this.numExterior) {
      this.presentToast("Favor de ingresar el numero exterior","bottom");
    }else if (!this.fraccionamiento) {
      this.presentToast("Introduce una colonia o fraccionamiento","bottom");
    }else if (!this.codigoPostal) {
      this.presentToast("Introduce un codig postal","bottom");
    }else if (!this.estado || this.estado=="seleccione") {
      this.presentToast("Favor de seleccionar un estado","bottom");
      
    }else{
      //this.navCtrl.navigateRoot('login');
      this.navCtrl.navigateForward('registrartres');
    }
  }

  async mostrarAlert(mensaje: string){
    const alert = await this.alertCtrl.create({
      header: mensaje,
      buttons: ['OK']
    });
    return await alert.present();
  }

  async presentToast(mensaje: string, pos: any) {
    const toast = await this.toastCtrl.create({
      message: mensaje,
      duration: 2000,
      position: pos,
      color: "dark"
    });
    toast.present();
  }

  async openPicker() {
    const picker = await this.pickerCtrl.create({
      buttons: [{
        text: 'Aceptar',
      }],
      columns: [
        {
          name: 'Estado',
          options: [
            {
              text: 'Aguascalientes',
              value: 'Aguascalientes'
            },
            {
              text: 'Baja California',
              value: 'Baja California'  
            },
            {
              text: 'Baja California Sur',
              value: 'Baja California Sur'
            },
            {
              text: 'Campeche',
              value: 'Campeche'
            },
            {
              text: 'Chihuahua',
              value: 'Chihuahua'
            },
            {
              text: 'Chiapas',
              value: 'Chiapas'
            },
            {
              text: 'Coahuila',
              value: 'Coahuila'
            },
            {
              text: 'Colima',
              value: 'Colima'
            },
            {
              text: 'Durango',
              value: 'Durango'
            },
            {
              text: 'Guanajuato',
              value: 'Guanajuato'
            },

          
        
          ]
        },
      ]
    });
    await picker.present();
  }
}
