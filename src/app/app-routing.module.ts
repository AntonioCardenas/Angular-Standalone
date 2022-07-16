import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{ path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: 'vista1', loadComponent:() => import('./ui/vista1/vista1.component').then(m => m.Vista1Component) },
{ path: 'vista2', loadComponent:() => import('./ui/vista2/vista2.component').then(m => m.Vista2Component) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
