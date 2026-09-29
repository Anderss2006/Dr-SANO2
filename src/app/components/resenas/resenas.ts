import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RESENAS } from '../../models/hospital.data';

@Component({
  selector: 'app-resenas',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="resenas" class="py-5 bg-light">
      <div class="container">
        <h2 class="text-center fw-bold mb-4 text-primary">Opiniones de Nuestros Pacientes</h2>
        <div class="row g-4">
          <div class="col-md-4" *ngFor="let resena of resenas">
            <div class="card h-100 border-0 shadow-sm p-3">
              <div class="card-body">
                <div class="mb-2 text-warning">
                  <i class="bi bi-star-fill me-1" *ngFor="let star of [].constructor(resena.estrellas)"></i>
                </div>
                <p class="fst-italic text-muted">"{{ resena.comentario }}"</p>
                <h3 class="h6 fw-bold text-end mb-0">- {{ resena.paciente }}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ResenasComponent {
  resenas = RESENAS;
}