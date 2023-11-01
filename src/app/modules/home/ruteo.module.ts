import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';


const rutas: Routes = [
    {
    path: 'home', 
    component: HomeComponent,  
    loadChildren: () => import('./router-child.module').then(m => m.RouterChildModule)
    }
  ]
  
  @NgModule({
    imports: [RouterModule.forChild(rutas)],
    exports: [RouterModule]
  })
  export class RuteoHomeModule { }
  