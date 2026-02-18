import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './inicio.html',
})
export class Inicio {
  stats = [
    { value: '5+', label: 'Proyectos y clientes' },
    { value: '10+', label: 'Clientes satisfechos' },
    { value: '24/7', label: 'Soporte técnico' },
  ];

  features = [
    {
      icon: '🚀',
      title: 'Desarrollo Ágil',
      desc: 'Entregamos tu proyecto en tiempo récord sin sacrificar la calidad ni el diseño.',
    },
    {
      icon: '📱',
      title: 'Diseño Responsive',
      desc: 'Tu sitio web lucirá perfecto en cualquier dispositivo, desde móviles hasta escritorio.',
    },
    {
      icon: '🔧',
      title: 'Soporte Continuo',
      desc: 'Estamos disponibles para ayudarte y mantener tu sitio funcionando al 100%.',
    },
  ];
}