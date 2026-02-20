import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [RouterLink, NgFor, NgIf],
  templateUrl: './servicios.html',
  styleUrls: ['./servicios.css'],
})
export class Servicios {
  services = [
    {
      icon: '📄',
      title: 'One Page',
      desc: 'Una ',
      highlight: 'página web única',
      descEnd: ', clara y eficiente. Ideal para presentar tu marca o servicio de forma directa, moderna y visualmente atractiva.',
      features: ['Diseño moderno y minimalista', 'Sección hero impactante', 'Formulario de contacto', 'Animaciones fluidas', 'Optimizado para móviles'],
    },
    {
      icon: '🏠',
      title: 'Sitio Web',
      desc: 'Una estructura más amplia, con navegación entre páginas. Perfecta para empresas o proyectos que necesitan ',
      highlight: 'organizar contenido',
      descEnd: ' y conectar mejor con sus visitantes.',
      features: ['Múltiples páginas', 'Panel de administración', 'SEO optimizado', 'Mapa de ubicación integrado', 'Google Analytics'],
    },
    {
      icon: '🛒',
      title: 'E-commerce',
      desc: 'Vende tus productos o servicios en línea con una tienda virtual completa, segura y fácil de administrar.',
      highlight: '',
      descEnd: '',
      features: ['Catálogo de productos', 'Carrito de compras', 'Pasarela de pagos', 'Gestión de inventario', 'Panel de pedidos'],
    },
    {
      icon: '🔧',
      title: 'Mantenimiento',
      desc: 'Mantén tu sitio web actualizado, seguro y funcionando correctamente con nuestro servicio de mantenimiento mensual.',
      highlight: '',
      descEnd: '',
      features: ['Actualizaciones de contenido', 'Copias de seguridad', 'Monitoreo de seguridad', 'Soporte técnico prioritario', 'Reportes de rendimiento'],
    },
  ];

  extras = [
    { icon: '🎨', title: 'Diseño de Logo', desc: 'Creamos la identidad visual de tu marca desde cero.' },
    { icon: '📧', title: 'Email Corporativo', desc: 'Correo profesional con tu dominio empresarial.' },
    { icon: '📊', title: 'Google Analytics', desc: 'Seguimiento y análisis de visitas a tu sitio web.' },
  ];
}