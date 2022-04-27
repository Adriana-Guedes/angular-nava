import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListarComponent } from './professores/listar/listar.component';

const routes: Routes = [
  {path: 'home', component: AppComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //MODULO PAI SEMPRE SERA forRoot
  exports: [RouterModule]
})
export class AppRoutingModule { }
