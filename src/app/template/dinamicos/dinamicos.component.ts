import { Component } from '@angular/core';

interface Persona{
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito{
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent {

  nuevoJuego: string = '';

  persona: Persona = {
    nombre: 'David',
    favoritos: [
      {id: 1, nombre: 'Fifa'},
      {id: 2, nombre: 'PES'},
      {id: 3, nombre: 'Age of Empire'},
      {id: 4, nombre: 'Empire Earth'}
    ]
  }

  guardar() {
    console.log('Formulario posteado')
  }

  eliminar(index: number) {
    this.persona.favoritos.splice(index, 1);
  }

  agregarJuego() {
    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego
    }
    console.log(this.persona.favoritos);
    console.log(nuevoFavorito);
    this.persona.favoritos.push({...nuevoFavorito});
    this.nuevoJuego = '';
  }
}
