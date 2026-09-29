import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SERVICIOS } from '../../models/hospital.data';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="servicios" class="py-5">
      <div class="container">
        <h2 class="text-center fw-bold mb-4 text-primary">Nuestros Servicios Médicos</h2>
        <div class="row g-4">
          <div class="col-md-3" *ngFor="let servicio of servicios">
            <div class="card h-100 text-center border-0 shadow-sm p-3">
              <div class="card-body">
                <i class="bi {{ servicio.icono }} text-primary display-4 mb-3"></i>
                <h3 class="h5 fw-bold card-title">{{ servicio.titulo }}</h3>
                <p class="card-text text-muted fs-6">{{ servicio.descripcion }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ServiciosComponent {
  servicios = SERVICIOS;
}