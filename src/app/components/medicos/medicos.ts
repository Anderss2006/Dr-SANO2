import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MEDICOS } from '../../models/hospital.data';

@Component({
  selector: 'app-medicos',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="medicos" class="py-5 bg-light">
      <div class="container">
        <h2 class="text-center fw-bold mb-4 text-primary">Cuerpo Médico Especializado</h2>
        <div class="row g-4">
          <div class="col-md-3" *ngFor="let medico of medicos">
            <div class="card h-100 border-0 shadow-sm">
              <img [src]="medico.imagen" class="card-img-top object-fit-cover" style="height: 220px;" [alt]="medico.nombre">
              <div class="card-body text-center">
                <h3 class="h5 fw-bold mb-1">{{ medico.nombre }}</h3>
                <span class="badge bg-primary mb-2">{{ medico.especialidad }}</span>
                <p class="small text-muted mb-0">{{ medico.cmp }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class MedicosComponent {
  medicos = MEDICOS;
}