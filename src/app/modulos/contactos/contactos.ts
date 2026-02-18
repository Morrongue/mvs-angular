import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-contactos',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf],
  templateUrl: './contactos.html',
})
export class Contactos {
  submitted = false;

  form = {
    nombre: '',
    email: '',
    servicio: '',
    mensaje: '',
  };

  contactInfo = [
    { icon: '📧', label: 'Email', value: 'mvsyntaxsolutions@gmail.com' },
    { icon: '📞', label: 'Teléfono / WhatsApp', value: '+57 314 6259 584' },
    { icon: '📍', label: 'Ubicación', value: 'Risaralda, Colombia' },
    { icon: '🕐', label: 'Horario de atención', value: 'Lun - Vie: 8am - 6pm' },
  ];

  onSubmit() {
    this.submitted = true;
    // Reset after 4s
    setTimeout(() => {
      this.submitted = false;
      this.form = { nombre: '', email: '', servicio: '', mensaje: '' };
    }, 4000);
  }
}