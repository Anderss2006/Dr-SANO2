import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar';
import { InicioComponent } from './components/inicio/inicio';
import { ServiciosComponent } from './components/servicios/servicios';
import { MedicosComponent } from './components/medicos/medicos';
import { PromocionesComponent } from './components/promociones/promociones';
import { ResenasComponent } from './components/resenas/resenas';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    InicioComponent,
    ServiciosComponent,
    MedicosComponent,
    PromocionesComponent,
    ResenasComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'hospital-dr-sano';
}