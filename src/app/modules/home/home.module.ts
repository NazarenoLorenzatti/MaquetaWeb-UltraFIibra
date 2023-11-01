import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CobranzaComponent } from './pages/cobranza/cobranza.component';
import { HomeComponent } from './pages/home/home.component';
import { PrimeNgModule } from '../template/prime-ng.module';
import { CarrouselComponent } from './pages/home/componentes/carrousel/carrousel.component';
import { Section2Component } from './pages/home/componentes/section2/section2.component';
import { Section3Component } from './pages/home/componentes/section3/section3.component';
import { Section4Component } from './pages/home/componentes/section4/section4.component';

@NgModule({
  declarations: [
    HomeComponent,
    CobranzaComponent,
    CarrouselComponent,
    Section2Component,
    Section3Component,
    Section4Component,
  ],
  imports: [
    PrimeNgModule,
    CommonModule
  ]
})
export class HomeModule {

}





