import { Component, inject } from '@angular/core';
import { Usuario } from '../../services/usuario';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {

  email=""
  password=""

  servicio = inject(Usuario)

  login(){
      this.servicio.getUsuario().subscribe({
        next:(usuarios: any[])=>{
          const usuario = usuarios.find(
            (u)=> u.email === this.email && u.password === this.password
          )

          if(usuario){
            localStorage.setItem("login", "true")
            alert("login correcto")
          }
        }
      })
  }

}
