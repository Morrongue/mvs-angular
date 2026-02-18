import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf, NgClass } from '@angular/common';

interface PlanFeature { label: string; included: boolean; }
interface Plan {
  name: string;
  originalPrice: string;
  price: string;
  popular: boolean;
  category: string;
  features: PlanFeature[];
}

@Component({
  selector: 'app-planes',
  standalone: true,
  imports: [RouterLink, NgFor, NgIf, NgClass],
  templateUrl: './planes.html',
})
export class Planes {
  categories = ['One Page', 'Sitio Web', 'Ecommerce'];
  activeCategory = 'Sitio Web';

  plans: Plan[] = [
    // One Page
    {
      name: 'Plan Starter', category: 'One Page', originalPrice: '249.750', price: '199.975', popular: false,
      features: [
        { label: '1 página', included: true },
        { label: 'Diseño responsive', included: true },
        { label: 'Botón de WhatsApp', included: true },
        { label: 'Formulario de contacto', included: true },
        { label: 'Soporte técnico asistido', included: true },
        { label: 'Auto-administrable', included: false },
        { label: 'Optimización SEO', included: false },
      ],
    },
    {
      name: 'Plan Standard', category: 'One Page', originalPrice: '374.750', price: '299.975', popular: true,
      features: [
        { label: '1 página premium', included: true },
        { label: 'Diseño responsive', included: true },
        { label: 'Botón de WhatsApp', included: true },
        { label: 'Formulario de contacto', included: true },
        { label: 'Soporte técnico asistido', included: true },
        { label: 'Auto-administrable', included: true },
        { label: 'Optimización SEO', included: true },
      ],
    },
    {
      name: 'Plan Premium', category: 'One Page', originalPrice: '499.750', price: '399.975', popular: false,
      features: [
        { label: '1 página premium + blog', included: true },
        { label: 'Diseño responsive', included: true },
        { label: 'Botón de WhatsApp', included: true },
        { label: 'Formulario de contacto', included: true },
        { label: 'Soporte técnico prioritario', included: true },
        { label: 'Auto-administrable', included: true },
        { label: 'Optimización SEO + Google Analytics', included: true },
      ],
    },
    // Sitio Web
    {
      name: 'Plan Starter', category: 'Sitio Web', originalPrice: '437.250', price: '374.975', popular: false,
      features: [
        { label: '3 páginas', included: true },
        { label: 'Diseño responsive', included: true },
        { label: 'Botón de WhatsApp', included: true },
        { label: 'Formulario de contacto', included: true },
        { label: 'Soporte técnico asistido', included: true },
        { label: 'Auto-administrable', included: true },
        { label: 'Galería de imágenes', included: true },
        { label: 'Mapa de ubicación', included: false },
        { label: 'Optimización SEO', included: false },
      ],
    },
    {
      name: 'Plan Standard', category: 'Sitio Web', originalPrice: '624.750', price: '499.975', popular: true,
      features: [
        { label: '6 páginas', included: true },
        { label: 'Diseño responsive', included: true },
        { label: 'Botón de WhatsApp', included: true },
        { label: 'Formulario de contacto', included: true },
        { label: 'Soporte técnico asistido', included: true },
        { label: 'Auto-administrable', included: true },
        { label: 'Galería de imágenes', included: true },
        { label: 'Mapa de ubicación', included: true },
        { label: 'Optimización SEO', included: true },
        { label: 'Google Analytics', included: false },
      ],
    },
    {
      name: 'Plan Premium', category: 'Sitio Web', originalPrice: '749.750', price: '649.975', popular: false,
      features: [
        { label: '12 páginas', included: true },
        { label: 'Diseño responsive', included: true },
        { label: 'Botón de WhatsApp', included: true },
        { label: 'Formulario de contacto', included: true },
        { label: 'Soporte técnico asistido', included: true },
        { label: 'Carrito de compras', included: true },
        { label: 'Galería de imágenes', included: true },
        { label: 'Mapa de ubicación', included: true },
        { label: 'Optimización SEO', included: true },
        { label: 'Google Analytics', included: true },
      ],
    },
    // Ecommerce
    {
      name: 'Plan Starter', category: 'Ecommerce', originalPrice: '749.750', price: '624.975', popular: false,
      features: [
        { label: 'Hasta 50 productos', included: true },
        { label: 'Diseño responsive', included: true },
        { label: 'Carrito de compras', included: true },
        { label: 'Pasarela de pagos básica', included: true },
        { label: 'Panel de administración', included: true },
        { label: 'SEO básico', included: false },
        { label: 'Google Analytics', included: false },
      ],
    },
    {
      name: 'Plan Standard', category: 'Ecommerce', originalPrice: '999.750', price: '849.975', popular: true,
      features: [
        { label: 'Hasta 200 productos', included: true },
        { label: 'Diseño responsive', included: true },
        { label: 'Carrito de compras', included: true },
        { label: 'Múltiples pasarelas de pago', included: true },
        { label: 'Panel de administración', included: true },
        { label: 'Optimización SEO', included: true },
        { label: 'Google Analytics', included: true },
      ],
    },
    {
      name: 'Plan Premium', category: 'Ecommerce', originalPrice: '1.249.750', price: '999.975', popular: false,
      features: [
        { label: 'Productos ilimitados', included: true },
        { label: 'Diseño responsive', included: true },
        { label: 'Carrito de compras', included: true },
        { label: 'Múltiples pasarelas de pago', included: true },
        { label: 'Panel de administración avanzado', included: true },
        { label: 'Optimización SEO avanzada', included: true },
        { label: 'Google Analytics + reportes', included: true },
      ],
    },
  ];

  get filteredPlans(): Plan[] {
    return this.plans.filter(p => p.category === this.activeCategory);
  }
}