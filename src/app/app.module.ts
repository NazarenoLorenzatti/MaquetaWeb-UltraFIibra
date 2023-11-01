import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './modules/home/home.module';
import { AreaUsuarioModule } from './modules/area-usuario/area-usuario/area-usuario.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    AreaUsuarioModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
