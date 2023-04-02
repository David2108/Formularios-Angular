/*
* - Se debe crear el archivo de la directiva name.directive.ts
* - Se Debe agregar la anotación @Directive
*   - Se indica el nombre de la directiva con el atributo "selector"
*     selector: '[nombre] [ngModel]' -> Se indica el nombre y que debe
*     usarse tambien el ngModel para usar la directiva
*   - Se agrega atributos adicionales usando @Input en la clase
*     @Input() minimo!: number;
*   - Se implementa la interfaz Validator par realizar las validaciones
*     - Se agrega dependencias usando "providers en la anotación @Directive"
*     - Para la validación se usa el "provider: NG_VALIDATOR" y se indica
*       la directiva que lo va a usar
* - Se debe agregar en "declarations" en el module
* */
import {Directive, Input} from "@angular/core";
import {FormControl, NG_VALIDATORS, Validator} from "@angular/forms";

@Directive({
  selector: '[customMin] [ngModel]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: CustomMinDirective,
    multi: true
  }]
})
export class CustomMinDirective implements Validator {
  @Input() minimo!: number;

  constructor() {
  }

  validate(control: FormControl) {
    const inputValue = control.value;
    return (inputValue < this.minimo) ?
      {'customMin': true}
      : null;
  }

}
