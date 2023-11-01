import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";


const constRutasHijas: Routes = [
    { path: '', component: HomeComponent},
    { path: 'home', component: HomeComponent},
  ]
  
  @NgModule({
    imports: [RouterModule.forChild(constRutasHijas)],
    exports: [RouterModule],
  })
  export class RouterChildModule { }
  