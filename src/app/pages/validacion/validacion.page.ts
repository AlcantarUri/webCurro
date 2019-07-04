import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-validacion',
  templateUrl: './validacion.page.html',
  styleUrls: ['./validacion.page.scss'],
})
export class ValidacionPage implements OnInit {


  usuario: string;
  codigo: string;
  constructor(
    private auth: AuthService,
    public router: Router
  ) { }

  ngOnInit() {
    
  }
  validarUsuario(){
    this.auth.confirmUser(this.usuario, this.codigo);
    
  }
  navInicio(){
    this.router.navigateByUrl('login');
  }
}
