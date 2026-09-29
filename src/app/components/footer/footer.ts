import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="bg-dark text-white py-4 mt-5">
      <div class="container text-center">
        <p class="mb-1">&copy; 2026 Hospital Dr. Sano - Todos los derechos reservados.</p>
        <small class="text-secondary">Atención de Calidad y Confianza</small>
      </div>
    </footer>
  `
})
export class FooterComponent {}