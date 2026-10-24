//IMPLEMENTAR UN FILTRO POR TIPO DE POKEMON () => Select
//IMPLEMNATR OTRO FILTRO POR DAÑO (MENORES 30) => Input

import { Component, inject } from '@angular/core';
import { Fire } from '../../services/fire';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-tabla',
  styleUrl: './tabla.css',
  templateUrl: './tabla.html',
})
export class Tabla {

  servicios = inject(Fire)

  pokemons = this.servicios.getPokemons()

  pokeArreglo = Object.entries(this.pokemons).map(  ([key, val]) => ({
    nombre: key,
    tipo: val.tipo,
    danio: val.danio
  }
)  )

  tipo=""

  cambiarTipo( valor: string){
    this.tipo = valor
    if( this.tipo ==  "psiquico"){
      localStorage.setItem("token", "true")
    }else{
      localStorage.setItem("token", "false")
    }
  }



}
