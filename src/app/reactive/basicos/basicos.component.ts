import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit{

  /*
  * Formularios Reactivos
  * Mantiene lo mas simple posible los formularios html y la mayoria
  * de la lógica la realiza en TypeScript
  *
  * - Se importa ReactiveFormModule en el module
  * */

  /*
  * - Se define un nombre para el formulario en una variable de
  *   tipo FormGroup
  * - Se inicializa el formulario reactivo se lo puede hacer de dos
  *   formas con FormGroup o FormBuilder
  * - Se asocia en la etiqueta form del HTML con [formGroup]="Name_Variable"
  * - Se asocia cada uno de los atributos del objeto con el que se
  *   inicializo el formulario en cada uno de los elementos HTML de esta
  *   forma formControlName="Name_Atributo"
  *
  * FormBuilder
  * FormBuilder es un servicio que se usa para crear formularios
  * complejos pero que tengan la anotación de un objeto de JavaScript
  * - Se inyecta el servicio
  * - Se inicializa el formulario con este servicio y se envia como
  *   argumento un objeto con todos los campos que tendra el formulario
  *   y sus respectivos valores
  * - El atributo del objeto de inicialización se asigna un array como
  *   valor, el cual va a tener los siguientes valores
  *   field: [value, [validators_sincronos], [validators, asincronos]]:
  *   - El nombre
  *   - Validadores síncronos -> Validadores que se ejecutan en el tipo
  *                              que el usuario toca una tecla. Si se
  *                              tiene varios valores se usa [], si es
  *                              es un solo valor se puede evitar []
  *   - Validadortes asíncronos -> Son validadores que se ejecutan a
  *                                destiempo
  * */
  /*miFormulario: FormGroup = new FormGroup({
    nombre      :  new FormControl('RTX 4080ti'),
    precio      :  new FormControl(1500),
    existencias :  new FormControl(5),
  })*/

  miFormulario: FormGroup = this.formBuilder.group({
    nombre: [
      ,
      [Validators.required, Validators.minLength(3)]
    ],
    precio: [
      ,
      [Validators.required, Validators.min(0)]
    ],
    existencias: [
      ,
      [Validators.required, Validators.min(0)]
    ],
  })

  constructor(private formBuilder: FormBuilder) {
  }


  ngOnInit(): void {

    /*
     * Se usa para modificar los valores de los campos del formulario
     * el objeto que se envia debe ser igual al que se inicializa en el
     * formulario
     */

    this.miFormulario.setValue({
      nombre: 'RTX 4080ti',
      precio: 1600,
      existencias: 10
    })

  }

  campoEsValido(campo: string) {
    return this.miFormulario.controls[campo].errors &&
      this.miFormulario.controls[campo].touched
  }
  guardar() {

    if(this.miFormulario.invalid){
      //Indica que todos los campos han sido tocados
      this.miFormulario.markAllAsTouched();
      return;
    }

    //Limpia todos los campos y devuelve a su estado inicial
    this.miFormulario.reset();

  }
}
