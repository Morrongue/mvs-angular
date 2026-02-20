import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav.html',
  styleUrls: ['./nav.css'],
})
export class Nav {
  menuOpen = false;

  timeStr = '';
  dateStr = '';
  private timer: any;

  navItems = [
    { label: 'Servicios', path: '/servicios' },
    { label: 'Portafolio', path: '/portafolio' },
    { label: 'Planes', path: '/planes' },
    { label: 'Contacto', path: '/contactos' },
  ];

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  ngOnInit(): void {
    this.updateTime();
    this.timer = setInterval(() => this.updateTime(), 1000);
  }

  ngOnDestroy(): void {
    if (this.timer) clearInterval(this.timer);
  }

  updateTime() {
    const d = new Date();
    this.timeStr = d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const dd = String(d.getDate()).padStart(2, '0');
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const yyyy = d.getFullYear();
    this.dateStr = `${dd}/${mm}/${yyyy}`;
  }

  scrollTop() {
    try { window.scrollTo({ top: 0, behavior: 'smooth' }); } catch (e) { window.scrollTo(0, 0); }
  }
}