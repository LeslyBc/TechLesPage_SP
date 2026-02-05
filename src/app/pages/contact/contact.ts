<<<<<<< HEAD
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ContactInterface } from '../contact-interface';
import { FormsModule, NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
=======
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
>>>>>>> e780d377514bff7525afecf2ed634cf3dde72281
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {

<<<<<<< HEAD
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
=======
>>>>>>> e780d377514bff7525afecf2ed634cf3dde72281
}
