import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary sticky-top shadow-sm">
      <div class="container">
        <a class="navbar-brand d-flex align-items-center fw-bold" href="#">
          <i class="bi bi-hospital fs-3 me-2"></i> Hospital Dr. Sano
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item"><a class="nav-link" href="#inicio">Inicio</a></li>
            <li class="nav-item"><a class="nav-link" href="#servicios">Servicios</a></li>
            <li class="nav-item"><a class="nav-link" href="#medicos">Médicos</a></li>
            <li class="nav-item"><a class="nav-link" href="#promociones">Promociones</a></li>
            <li class="nav-item"><a class="nav-link" href="#resenas">Reseñas</a></li>
          </ul>
        </div>
      </div>
    </nav>
  `
})
export class NavbarComponent {}