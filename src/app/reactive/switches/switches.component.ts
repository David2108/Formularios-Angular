import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css']
})
export class SwitchesComponent implements OnInit{

  //Para establecer los valores se hace en el ngOnInit
  miFormulario: FormGroup = this.formBuilder.group({
    genero: ['M', Validators.required],
    notificaciones: [true, Validators.required],
    condiciones: [false, Validators.requiredTrue]
  });

  persona = {
    genero: 'F',
    notificaciones: true
  }

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {

    //Limpia todos los campos y coloca los valores del objeto
    this.miFormulario.reset({
      ...this.persona,
      condiciones: true
    });

    //Se ejecuta al haber algun cambio en el formulario
    /* Forma 1
        this.miFormulario.valueChanges.subscribe(form => {
        delete form.condiciones;
        this.persona = form;
    })*/
    //Forma 2
    this.miFormulario.valueChanges.subscribe(({condiciones, ...rest}) => {
      this.persona = rest;
    })

  }

  guardar(){

    const formValue = {...this.miFormulario.value}
    delete formValue.condiciones;

    this.persona = formValue;

  }

}
