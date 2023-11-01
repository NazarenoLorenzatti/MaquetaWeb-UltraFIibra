import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild, inject } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-section3',
  templateUrl: './section3.component.html',
  styleUrls: ['./section3.component.css']
})
export class Section3Component implements OnInit, AfterViewInit {
  @ViewChild('overlay') overlay!: ElementRef;
  @ViewChild('formulario') formulario!: ElementRef;
  private renderer = inject(Renderer2);
  nombre!: string;
  correo!: string;
  value3: number = 10;
  localidad!: string;
  direccion!: string;
  comentario!: string;
  consulta!: SelectItem[];

  ngAfterViewInit(): void {
    const opciones = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2, // Cambia esto según tu preferencia
    };
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.formulario.nativeElement.classList.add('animacion');
          this.overlay.nativeElement.classList.add('animacion');
          observer.unobserve(entry.target);
        }
      });
    }, opciones);

    observer.observe(this.overlay.nativeElement);
  }

  ngOnInit(): void {

    this.consulta = [
      { label: 'Reclamo', value: 'Reclamo' },
      { label: 'Quiero Contratar', value: 'contratar' },
      { label: 'Cliente Corporativo', value: 'corpo' }
    ];

  }

}
