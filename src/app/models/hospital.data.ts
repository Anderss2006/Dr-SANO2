export interface Servicio {
  titulo: string;
  descripcion: string;
  icono: string;
}

export interface Medico {
  nombre: string;
  especialidad: string;
  cmp: string;
  imagen: string;
}

export interface Resena {
  paciente: string;
  comentario: string;
  estrellas: number;
}

export interface Promocion {
  titulo: string;
  descuento: string;
  descripcion: string;
  validez: string;
}

export const SERVICIOS: Servicio[] = [
  { titulo: 'Emergencia 24/7', descripcion: 'Atención médica inmediata con equipamiento de alta tecnología.', icono: 'bi-ambulance' },
  { titulo: 'Consulta Externa', descripcion: 'Citas médicas con especialistas de trayectoria internacional.', icono: 'bi-person-badge' },
  { titulo: 'Laboratorio Clínico', descripcion: 'Análisis de laboratorio con resultados precisos y confiables.', icono: 'bi-activity' },
  { titulo: 'Diagnóstico por Imágenes', descripcion: 'Rayos X, Tomografía y Resonancia Magnética de alta resolución.', icono: 'bi-heart-pulse' }
];

export const MEDICOS: Medico[] = [
  { nombre: 'Dr. Carlos Mendoza', especialidad: 'Cardiología', cmp: 'CMP 45123', imagen: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400' },
  { nombre: 'Dra. Ana Gutiérrez', especialidad: 'Pediatría', cmp: 'CMP 51209', imagen: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=400' },
  { nombre: 'Dr. Roberto Silva', especialidad: 'Neurología', cmp: 'CMP 38921', imagen: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400' },
  { nombre: 'Dra. María Fernández', especialidad: 'Ginecología', cmp: 'CMP 60124', imagen: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400' }
];

export const RESENAS: Resena[] = [
  { paciente: 'Juan Pérez', comentario: 'Excelente atención en emergencias. El personal muy humano y capacitado.', estrellas: 5 },
  { paciente: 'Lucía Gómez', comentario: 'Las instalaciones son modernas y la Dra. Gutiérrez atendió muy bien a mi hijo.', estrellas: 5 },
  { paciente: 'Marcos Rivas', comentario: 'Citas rápidas y resultados de laboratorio el mismo día. Muy recomendado.', estrellas: 4 }
];

export const PROMOCIONES: Promocion[] = [
  { titulo: 'Chequeo Médico Preventivo', descuento: '30% OFF', descripcion: 'Incluye exámenes de laboratorio, electrocardiograma y consulta médica.', validez: 'Hasta el 31 de Octubre' },
  { titulo: 'Especial Odontológico', descuento: '2x1', descripcion: 'Limpieza dental profunda más evaluación general.', validez: 'Hasta el 15 de Noviembre' }
];