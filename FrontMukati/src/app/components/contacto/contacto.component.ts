import { Component } from '@angular/core';

@Component({
    selector: 'app-contacto',
    standalone: true,
    imports: [],
    templateUrl: './contacto.component.html',
    styleUrl: './contacto.component.scss'
})

export class ContactoComponent {
    nombre: string = '';
    email: string = '';
    telefono: string = '';
    proyecto: string = '';

    enviarFormulario() {

        console.log('Formulario enviado:', {
            nombre: this.nombre,
            email: this.email,
            telefono: this.telefono,
            proyecto: this.proyecto
        });
    }
}
