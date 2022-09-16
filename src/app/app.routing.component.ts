import { FooterComponent } from './Home/footer/footer.component';
import { HomeComponent } from './Home/home.component';
import { CadastradosComponent } from './cadastrados/cadastrados.component';
import { CadastroComponent } from './Home/cadastro/cadastro.component';


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Home/login/login.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent },
  {path:'cadastro', component:CadastroComponent},
  {path:'cadastrados', component:CadastradosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
