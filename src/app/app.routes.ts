import { Routes } from '@angular/router';
import path from 'node:path';
import { AsesoriaComponent } from './components/asesoria/asesoria.component';
import { BarraNavegacionComponent } from './components/barra-navegacion/barra-navegacion.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';

export const routes: Routes = [
{path: "", component:AsesoriaComponent},
{path: "", component:BarraNavegacionComponent},
{path: "", component:ContactoComponent},
{path: "", component:FooterComponent},
{path: "", component:NavbarComponent},

];
