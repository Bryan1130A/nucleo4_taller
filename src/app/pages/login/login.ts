import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Fire } from '../../services/fire';
import { Api } from '../../services/api';
import { Sesion } from '../../services/sesion';
import { usarFirebase } from '../../services/config';

@Component({
  imports: [FormsModule, RouterLink],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {

  email = ""
  password = ""
  mensaje = signal("")

  servicio = usarFirebase ? inject(Fire) : inject(Api)
  sesion = inject(Sesion)
  router = inject(Router)

  async login() {
    const usuarios = await this.servicio.getUsuarios()
    const usuario = usuarios.find(
      (u: any) => u.email === this.email && u.password === this.password
    )

    if (usuario) {
      this.sesion.iniciar(usuario)
      this.router.navigate(["/tabla"])
    } else {
      this.mensaje.set("correo o contraseña incorrectos")
    }
  }
}
