import { Component, OnInit } from '@angular/core';
import { ClienteModel } from 'src/app/modules/models/cliente.model';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent implements OnInit {

  clientes!: ClienteModel[];
  responsiveOptions: any[] | undefined;

  ngOnInit(): void {

    this.clientes = [
      { nombreCliente: "AGD", logoCliente: "agd-logo.png" },
      { nombreCliente: "BRIMAX", logoCliente: "brimax.png" },
      { nombreCliente: "CELULOSA", logoCliente: "celulosa.jpg" },
      { nombreCliente: "RENOVA", logoCliente: "renova.jpg" },
      { nombreCliente: "PELCO", logoCliente: "pelco.svg" },
    ];

    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

}
