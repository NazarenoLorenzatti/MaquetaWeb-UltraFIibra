import { Component, OnInit } from '@angular/core';
import { PrimeIcons, MenuItem } from 'primeng/api';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  imagenes: String[] = [];
  value: number | undefined;

  constructor(){}
  items: MenuItem[] = [
    { label: 'Inicio', icon: PrimeIcons.HOME, routerLink: '/home' },
    { label: 'Cobranza y Pagos', icon: PrimeIcons.HOME, routerLink: '/home' },
    { label: 'Promociones', icon: PrimeIcons.HOME, routerLink: '/home' },
    { label: 'Productos', icon: 'pi pi-home', routerLink: '/products' },
    { label: 'Acerca de', icon: 'pi pi-fw pi-info', routerLink: '/about' },
    { label: 'Contacto', icon: 'pi pi-fw pi-info', routerLink: '/about' },
  ];

  ngOnInit(): void {

  }  

}
