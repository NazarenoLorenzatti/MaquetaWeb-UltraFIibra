import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RuteoHomeModule } from './modules/home/ruteo.module';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home'},
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {enableTracing: false, useHash: true}
    ),
    RuteoHomeModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
