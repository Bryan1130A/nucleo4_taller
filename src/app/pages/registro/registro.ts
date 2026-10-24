import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Usuario } from '../../services/usuario';

@Component({
  imports: [FormsModule],
  selector: 'app-registro',
  styleUrl: './registro.css',
  templateUrl: './registro.html',
})
export class Registro {

  email=""
  password=""
  name=""

  servicio = inject( Usuario )

  registrar(formulario: any){
    this.servicio.postUsuario( formulario.value).subscribe()
  }

}
