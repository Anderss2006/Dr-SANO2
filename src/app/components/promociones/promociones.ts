import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PROMOCIONES } from '../../models/hospital.data';

@Component({
  selector: 'app-promociones',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="promociones" class="py-5">
      <div class="container">
        <h2 class="text-center fw-bold mb-4 text-primary">Promociones Vigentes</h2>
        <div class="row g-4 justify-content-center">
          <div class="col-md-5" *ngFor="let promo of promociones">
            <div class="card border-primary h-100 shadow-sm">
              <div class="card-header bg-primary text-white text-center fw-bold fs-5">
                {{ promo.titulo }}
              </div>
              <div class="card-body text-center">
                <h3 class="display-6 fw-bold text-success mb-2">{{ promo.descuento }}</h3>
                <p class="card-text">{{ promo.descripcion }}</p>
                <small class="text-muted d-block fw-semibold"><i class="bi bi-calendar-check me-1"></i> Vigencia: {{ promo.validez }}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class PromocionesComponent {
  promociones = PROMOCIONES;
}