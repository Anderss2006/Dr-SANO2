import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  standalone: true,
  template: `
    <section id="inicio" class="py-5 bg-light">
      <div class="container">
        <div class="row align-items-center mb-5">
          <div class="col-md-6">
            <h1 class="display-4 fw-bold text-primary mb-3">Bienvenidos al Hospital Dr. Sano</h1>
            <p class="lead">Cuidamos de tu salud y la de tu familia con excelencia médica, calidez humana y tecnología de vanguardia.</p>
          </div>
          <div class="col-md-6">
            <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800" class="img-fluid rounded shadow" alt="Hospital Dr. Sano">
          </div>
        </div>

        <div class="row text-center mt-4 g-4">
          <div class="col-md-4">
            <div class="card h-100 border-0 shadow-sm p-4">
              <i class="bi bi-hourglass-split text-primary fs-1 mb-2"></i>
              <h3 class="h5 fw-bold">Nuestra Historia</h3>
              <p class="text-muted">Fundado con el compromiso de brindar salud integral a la comunidad, el Hospital Dr. Sano cuenta con más de 25 años de trayectoria en el sector médico.</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card h-100 border-0 shadow-sm p-4">
              <i class="bi bi-bullseye text-primary fs-1 mb-2"></i>
              <h3 class="h5 fw-bold">Misión</h3>
              <p class="text-muted">Proporcionar servicios de salud preventivos y especializados con elevados estándares de calidad y un profundo sentido ético.</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card h-100 border-0 shadow-sm p-4">
              <i class="bi bi-eye text-primary fs-1 mb-2"></i>
              <h3 class="h5 fw-bold">Visión</h3>
              <p class="text-muted">Ser la institución hospitalaria líder y referente en innovación médica y satisfacción del paciente a nivel regional.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class InicioComponent {}