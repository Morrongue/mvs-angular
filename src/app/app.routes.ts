import { Routes } from '@angular/router';
import { Contactos } from './modulos/contactos/contactos';
import { Servicios } from './modulos/servicios/servicios';
import { Inicio } from './modulos/inicio/inicio';
import { Principal } from './estructura/principal';
import { Noencontrado } from './modulos/noencontrado/noencontrado';
import { Portafolio } from './modulos/portafolio/portafolio';
import { Planes } from './modulos/planes/planes';

export const routes: Routes = [
    {path: '', component: Principal, children : [
        {path: 'inicio', component: Inicio},
        {path: 'servicios', component: Servicios},
        {path: 'contactos', component: Contactos},
        {path: 'portafolio', component: Portafolio},
        {path: 'planes', component: Planes},
        {path: '', redirectTo: 'inicio', pathMatch: 'full'},
    ]  
}, 
{path: '**', redirectTo: 'noencontrado', pathMatch: 'full'},
{path: 'noencontrado', component:Noencontrado},
];

