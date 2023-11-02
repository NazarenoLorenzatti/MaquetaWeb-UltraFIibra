import { Component, OnInit } from '@angular/core';
import { TarjetaModel } from 'src/app/modules/models/tarjeta.model';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.css'],
  animations: [
    trigger('scaleAnimation', [
      state('true', style({ opacity: 1 })),
      state('false', style({ opacity: 0 })),
      transition('false => true', animate('300ms ease-in')),
      transition('true => false', animate('300ms ease-out'))
    ])
  ]
})
export class Section2Component implements OnInit{

  indexLocalidad: number = 0;
  isAnimating: boolean = false;

  seleccionarLocalidad(index: number): void {
    this.isAnimating = true;
    setTimeout(() => {
      this.indexLocalidad = index;
      this.isAnimating = false;
    }, 100); 
  }

  localidades: any[] = [
    { 
      localidad: 'Monje',
      direccion: 'Francisco Caminos 566',
      horario: '08:00 Hs A 12.30 Hs',
      tarjetas: [
        { nombrePlan: 'Mega', precioPlan: '6.500', detallesPlan: 'Internet 25 Megas' },
        { nombrePlan: 'Super', precioPlan: '7.500', detallesPlan: 'Internet 50 Megas' },
        { nombrePlan: 'Ultra', precioPlan: '8.500', detallesPlan: 'Internet 100 Megas' },
        { nombrePlan: 'Corpo', precioPlan: 'Consultar', detallesPlan: 'Hasta 300 Megas' }
      ]
    },
    {
      localidad: 'Maciel',
      direccion: 'Bv. Maciel 123',
      horario: '08:00 Hs A 17.00 Hs',
      tarjetas: [
        { nombrePlan: 'Mega', precioPlan: '7.500', detallesPlan: 'Internet 25 Megas' },
        { nombrePlan: 'Super', precioPlan: '8.500', detallesPlan: 'Internet 50 Megas' },
        { nombrePlan: 'Ultra', precioPlan: '10.500', detallesPlan: 'Internet 100 Megas' },
        { nombrePlan: 'Corpo', precioPlan: 'Consultar', detallesPlan: 'Hasta 300 Megas' }
      ]
    },
    {
      localidad: 'Gaboto',
      direccion: 'Calle Gaboto 888',
      horario: '08:00 Hs A 17:00 Hs',
      tarjetas: [
        { nombrePlan: 'Mega', precioPlan: '6.500', detallesPlan: 'Internet 30 Megas' },
        { nombrePlan: 'Super', precioPlan: '7.500', detallesPlan: 'Internet 60 Megas' },
        { nombrePlan: 'Ultra', precioPlan: '8.500', detallesPlan: 'Internet 80 Megas' },
        { nombrePlan: 'Corpo', precioPlan: 'Consultar', detallesPlan: 'Hasta 200 Megas' }
      ]
    },
    {
      localidad: 'Monje',
      direccion: 'Francisco Caminos 566',
      horario: '08:00 Hs A 12:30 Hs',
      tarjetas: [
        { nombrePlan: 'Mega', precioPlan: '6.500', detallesPlan: 'Internet 25 Megas' },
        { nombrePlan: 'Super', precioPlan: '7.500', detallesPlan: 'Internet 50 Megas' },
        { nombrePlan: 'Ultra', precioPlan: '8.500', detallesPlan: 'Internet 100 Megas' },
        { nombrePlan: 'Corpo', precioPlan: 'Consultar', detallesPlan: 'Hasta 300 Megas' }
      ]
    },
    {
      localidad: 'Monje',
      direccion: 'Francisco Caminos 566',
      horario: '08:00 Hs A 12.30 Hs',
      tarjetas: [
        { nombrePlan: 'Mega', precioPlan: '6.500', detallesPlan: 'Internet 25 Megas' },
        { nombrePlan: 'Super', precioPlan: '7.500', detallesPlan: 'Internet 50 Megas' },
        { nombrePlan: 'Ultra', precioPlan: '8.500', detallesPlan: 'Internet 100 Megas' },
        { nombrePlan: 'Corpo', precioPlan: 'Consultar', detallesPlan: 'Hasta 300 Megas' }
      ]
    },
    {
      localidad: 'Monje',
      direccion: 'Francisco Caminos 566',
      horario: '08:00 Hs A 12.30 Hs',
      tarjetas: [
        { nombrePlan: 'Mega', precioPlan: '6.500', detallesPlan: 'Internet 25 Megas' },
        { nombrePlan: 'Super', precioPlan: '7.500', detallesPlan: 'Internet 50 Megas' },
        { nombrePlan: 'Ultra', precioPlan: '8.500', detallesPlan: 'Internet 100 Megas' },
        { nombrePlan: 'Corpo', precioPlan: 'Consultar', detallesPlan: 'Hasta 300 Megas' }
      ]
    },
    {
      localidad: 'Monje',
      direccion: 'Francisco Caminos 566',
      horario: '08:00 Hs A 12.30 Hs',
      tarjetas: [
        { nombrePlan: 'Mega', precioPlan: '6.500', detallesPlan: 'Internet 25 Megas' },
        { nombrePlan: 'Super', precioPlan: '7.500', detallesPlan: 'Internet 50 Megas' },
        { nombrePlan: 'Ultra', precioPlan: '8.500', detallesPlan: 'Internet 100 Megas' },
        { nombrePlan: 'Corpo', precioPlan: 'Consultar', detallesPlan: 'Hasta 300 Megas' }
      ]
    },
    {
      localidad: 'Monje',
      direccion: 'Francisco Caminos 566',
      horario: '08:00 Hs A 12.30 Hs',
      tarjetas: [
        { nombrePlan: 'Mega', precioPlan: '6.500', detallesPlan: 'Internet 25 Megas' },
        { nombrePlan: 'Super', precioPlan: '7.500', detallesPlan: 'Internet 50 Megas' },
        { nombrePlan: 'Ultra', precioPlan: '8.500', detallesPlan: 'Internet 100 Megas' },
        { nombrePlan: 'Corpo', precioPlan: 'Consultar', detallesPlan: 'Hasta 300 Megas' }
      ]
    },
    {
      localidad: 'Monje',
      direccion: 'Francisco Caminos 566',
      horario: '08:00 Hs A 12.30 Hs',
      tarjetas: [
        { nombrePlan: 'Mega', precioPlan: '6.500', detallesPlan: 'Internet 25 Megas' },
        { nombrePlan: 'Super', precioPlan: '7.500', detallesPlan: 'Internet 50 Megas' },
        { nombrePlan: 'Ultra', precioPlan: '8.500', detallesPlan: 'Internet 100 Megas' },
        { nombrePlan: 'Corpo', precioPlan: 'Consultar', detallesPlan: 'Hasta 300 Megas' }
      ]
    },
    {
      localidad: 'Baigorria',
      direccion: 'Calle Falsa 123',
      horario: '08:00 Hs A 17.30 Hs',
      tarjetas: [
        { nombrePlan: 'Mega', precioPlan: '6.500', detallesPlan: 'Internet 50 Megas' },
        { nombrePlan: 'Super', precioPlan: '7.500', detallesPlan: 'Internet 100 Megas' },
        { nombrePlan: 'Ultra', precioPlan: '8.500', detallesPlan: 'Internet 200 Megas' },
        { nombrePlan: 'Corpo', precioPlan: 'Consultar', detallesPlan: 'Hasta 600 Megas' }
      ]
    },
    {
      localidad: 'Baigorria',
      direccion: 'Calle Falsa 123',
      horario: '08:00 Hs A 17.30 Hs',
      tarjetas: [
        { nombrePlan: 'Mega', precioPlan: '6.500', detallesPlan: 'Internet 50 Megas' },
        { nombrePlan: 'Super', precioPlan: '7.500', detallesPlan: 'Internet 100 Megas' },
        { nombrePlan: 'Ultra', precioPlan: '8.500', detallesPlan: 'Internet 200 Megas' },
        { nombrePlan: 'Corpo', precioPlan: 'Consultar', detallesPlan: 'Hasta 600 Megas' }
      ]
    }
  ];

  ngOnInit(): void {   

  } 
}
