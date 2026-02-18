import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-noencontrado',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="min-h-screen bg-[#0a0f1e] flex items-center justify-center text-center px-6">
      <div>
        <div class="text-[#00e5a0] font-mono text-8xl font-bold mb-4 animate-pulse">404</div>
        <h1 class="text-white text-4xl font-bold mb-4">Página no encontrada</h1>
        <p class="text-gray-400 font-mono mb-10">La página que buscas no existe o fue movida.</p>
        <a
          routerLink="/inicio"
          class="bg-[#00e5a0] text-[#0a0f1e] font-bold px-8 py-4 rounded-lg hover:bg-[#00c88a] transition-all duration-300 hover:scale-105 inline-block"
        >
          ← Volver al inicio
        </a>
      </div>
    </div>
  `,
})
export class Noencontrado {}