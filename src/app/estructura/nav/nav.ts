import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav.html',
})
export class Nav {
  menuOpen = false;

  navItems = [
    { label: 'Servicios', path: '/servicios' },
    { label: 'Portafolio', path: '/portafolio' },
    { label: 'Planes', path: '/planes' },
    { label: 'Contacto', path: '/contactos' },
  ];

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}