import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Fire } from '../../services/fire';
import { Router } from '@angular/router';

@Component({
  imports: [FormsModule],
  selector: 'app-formulario',
  styleUrl: './formulario.css',
  templateUrl: './formulario.html',
})
export class Formulario {


  nombre=""
  danio=""
  tipo=""

  servicio = inject(Fire)
  router = inject(Router)

  guardar( pokemon : NgForm){
    this.servicio.postPokemon(pokemon.value)
  }

  cerrar(){
    localStorage.removeItem("login")
    this.router.navigate(["/login"])
  }
}
