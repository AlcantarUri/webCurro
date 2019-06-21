import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registraruno',
  templateUrl: './registraruno.page.html',
  styleUrls: ['./registraruno.page.scss'],
})
export class RegistrarunoPage implements OnInit {


  nombreAlumno: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  telefono: string;

  constructor(
      private navCtrl: NavController,
      private alertCtrl: AlertController
  ) { }

  ngOnInit() {
  }


  retornologin(){
    this.navCtrl.navigateBack('login');
  }

  async toRegistroDos(){
    if (!this.nombreAlumno) {
        const alert = await this.alertCtrl.create({
          header: 'Falto campo Nombre',
          buttons: ['OK']
        });
        return await alert.present();
    }else if (!this.apellidoPaterno) {
      console.log("Ingrese Nombre");
      const alert = await this.alertCtrl.create({
        header: 'Falto Apellido Paterno',
        buttons: ['OK']
      });
      return await alert.present();
    }else if (!this.apellidoMaterno) {
      console.log("Ingrese Nombre");
      const alert = await this.alertCtrl.create({
        header: 'Falto Apellido Materno',
        buttons: ['OK']
      });
      return await alert.present();
    }else if (!this.telefono) {
      console.log("Ingrese Nombre");
      const alert = await this.alertCtrl.create({
        header: 'Favor de ingresar un telefono',
        buttons: ['OK']
      });
      return await alert.present();
    } else{
      
      
      //metodo para comparar informacion
      //y para pasar a siguiente pagina
      this.navCtrl.navigateForward('registrardos');

    }
  }

}
