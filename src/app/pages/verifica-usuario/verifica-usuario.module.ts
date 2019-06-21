import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VerificaUsuarioPage } from './verifica-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: VerificaUsuarioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VerificaUsuarioPage]
})
export class VerificaUsuarioPageModule {}
