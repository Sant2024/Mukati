import { Component } from '@angular/core';

@Component({
    selector: 'app-contacto',
    standalone: true,
    imports: [],
    templateUrl: './contacto.component.html',
    styleUrl: './contacto.component.scss',
})
export class ContactoComponent {
/* 
    emailPattern: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    phonePattern: RegExp = /\d{5,}$/;

    formGroup: FormGroup;

    constructor(private formBuilder: FormBuilder) {
        this.formGroup = formBuilder.group({
            nombre: ['', Validators.required],
            email: [
                '',
                [Validators.required, Validators.pattern(this.emailPattern)],
            ],
            telefono: ['', Validators.pattern(this.phonePattern)],
            proyecto: ['', Validators.required],
        });
    }

    enviarFormulario() {
        if (this.formGroup.valid) {
            console.log(this.formGroup.value);
        }
    } */
}
