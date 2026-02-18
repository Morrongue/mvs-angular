import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from '../estructura/nav/nav';
import { Footer } from '../estructura/footer/footer';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [RouterOutlet, Nav, Footer],
  templateUrl: './principal.html',
})
export class Principal {}