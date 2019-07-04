import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'mapauno', loadChildren: './pages/mapauno/mapauno.module#MapaunoPageModule' },
  { path: 'mapaprueba', loadChildren: './pages/mapaprueba/mapaprueba.module#MapapruebaPageModule' },
  { path: 'registraruno', loadChildren: './pages/registraruno/registraruno.module#RegistrarunoPageModule' },
  { path: 'registrardos', loadChildren: './pages/registrardos/registrardos.module#RegistrardosPageModule' },
  { path: 'verifica-usuario', loadChildren: './pages/verifica-usuario/verifica-usuario.module#VerificaUsuarioPageModule' },
  { path: 'registrartres', loadChildren: './pages/registrartres/registrartres.module#RegistrartresPageModule' },
  { path: 'validacion', loadChildren: './pages/validacion/validacion.module#ValidacionPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
