import { CadastradosComponent } from './cadastrados/cadastrados.component';
import { CadastroComponent } from './institucional/cadastro/cadastro.component';

import { InicioComponent } from './inicio/inicio.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './institucional/login/login.component';

const routes: Routes = [
  {path:'', component: InicioComponent},
  {path:'login', component: LoginComponent },
  {path:'cadastro', component:CadastroComponent},
  {path:'cadastrados', component:CadastradosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
