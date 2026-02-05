import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ContactInterface } from '../contact-interface';
import { FormsModule, NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {

  datos : ContactInterface = {
      nombre: '',
      email: '',
      mensaje: ''
    };

  enviarFormulario() {
    console.log('Formulario enviado:', this.datos);
    alert('Gracias por contactarnos, ' + this.datos.nombre + '! Hemos recibido tu mensaje.');
    // Aquí puedes agregar la lógica para enviar los datos del formulario a un servidor o procesarlos según tus necesidades.
  }

  resetForm() {
    this.datos = {
      nombre: '',
      email: '',
      mensaje: ''
    };
  }
}
