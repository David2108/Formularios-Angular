import {Component} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent {

  /*
  * Para indicar que el campo es un arreglo se usa FormBuilder.array
  * */
  miFormulario: FormGroup = this.formBuilder.group({
    nombre: [
      ,
      [Validators.required, Validators.minLength(3)]
    ],
    favoritos: this.formBuilder.array(
      [
        ['FIFA', Validators.required],
        ['PES', Validators.required],
      ],
      Validators.required
    )
  })

  /*
  * Para usar una variable aparte de los campos del formulario se puede
  * usar definiendo una variable de tipo FormControl
  * - Para enlazar este campo con un elemento HTML se usa
  *   [formControl]="name_variable"
  * */
  nuevoFavorito: FormControl = this.formBuilder.control(
    '', Validators.required);

  get favoritos(){
    //Se indica que esa expresión es un Form Array con as FormArray
    return this.miFormulario.get('favoritos') as FormArray;
  }

  constructor(private formBuilder: FormBuilder) {
  }

  guardar() {

    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }

    this.miFormulario.reset();

  }

  validarCampo(campo: string) {
    return this.miFormulario.controls[campo].errors &&
      this.miFormulario.controls[campo].touched
  }

  agregarFavorito() {

    if(this.nuevoFavorito.invalid){return;}

    this.favoritos.push(
      this.formBuilder.control(
        this.nuevoFavorito.value,
        Validators.required)
    );

    this.nuevoFavorito.reset();

  }

  eliminarFavorito(index: number) {
    this.favoritos.removeAt(index);
  }

}
