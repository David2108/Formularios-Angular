import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {

  //Se inicializa despues del NgOnInit
  @ViewChild('miFormulario') miFormulario!: NgForm;

  initialForm = {
    producto: 'RTX 4000t1',
    precio: 0,
    existencia: 10
  }

  nombreValido(): boolean {
    return this.miFormulario?.controls['producto']?.valid &&
      this.miFormulario?.controls['producto']?.touched;
  }

  guardar() {
    console.log(this.miFormulario.value);

    /*
    * Se usa para limpiar los campos
    * - El atributo pristine regresa a true
    * - El atributo touch regresa a false
    * - Se puede enviar como argumento un objeto indicando los nombres
    *   de los atributos y sus valores por defecto
    * */
    this.miFormulario.resetForm(this.initialForm);
  }

  precioValido(): boolean {
    return this.miFormulario?.controls['precio']?.value > 0 &&
      this.miFormulario?.controls['precio']?.touched;
  }
}
