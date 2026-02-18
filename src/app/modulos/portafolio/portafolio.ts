import { Component, computed, signal } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

interface Project {
  name: string;
  type: string;
  desc: string;
  techs: string[];
  image?: string;
  url?: string;
}

@Component({
  selector: 'app-portafolio',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './portafolio.html',
})
export class Portafolio {
  tabs = ['Todos', 'Sitio Web', 'One Page', 'E-commerce'];
  activeTab = 'Todos';

  projects: Project[] = [
    {
      name: 'DataManager App',
      type: 'Sitio Web',
      desc: 'Aplicación web para gestión de inventario, ventas, clientes y reportes.',
      techs: ['PHP', 'MySQL', 'Bootstrap'],
      image: '/LogoData.png',
    },
    {
      name: 'Arepas Galeón',
      type: 'Sitio Web',
      desc: 'Sitio web informativo y editable por el usuario.',
      techs: ['PHP', 'MySQL', 'Bootstrap'],
      image: '/LogoArepasGaleon.png',
      url: 'https://arepasgaleon.com',
    },
    {
      name: 'PetCare Booking',
      type: 'Sitio Web',
      desc: 'Sistema de reservas para clínica veterinaria con roles, agendas, historias clínicas y reportes.',
      techs: ['Django', 'Python', 'MongoDB', 'Tailwind'],
      image: '/LogoPetCare.png',
      url: 'https://petcare-r8tf.onrender.com',
    },
    {
      name: 'AgroSolutions',
      type: 'One Page',
      desc: 'Landing page moderna para empresa del sector agropecuario.',
      techs: ['Angular', 'Tailwind', 'TypeScript'],
      image: '/LogoAgro.jpg',
      url: '#',
    },
  ];

  get filteredProjects(): Project[] {
    if (this.activeTab === 'Todos') return this.projects;
    return this.projects.filter(p => p.type === this.activeTab);
  }
}