import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Fire } from '../../services/fire';
import { Api } from '../../services/api';
import { usarFirebase } from '../../services/config';

@Component({
  imports: [FormsModule],
  selector: 'app-registro',
  styleUrl: './registro.css',
  templateUrl: './registro.html',
})
export class Registro {

  name = ""
  email = ""
  password = ""
  mensaje = signal("")

  servicio = usarFirebase ? inject(Fire) : inject(Api)
  router = inject(Router)

  async registrar() {
    if (this.name == "" || this.email == "" || this.password == "") {
      this.mensaje.set("llena todos los campos")
      return
    }

    const usuarios = await this.servicio.getUsuarios()
    if (usuarios.find((u: any) => u.email == this.email)) {
      this.mensaje.set("ese correo ya esta registrado")
      return
    }

    await this.servicio.postUsuario({
      nombre: this.name,
      email: this.email,
      password: this.password,
      rol: "estandar"
    })

    this.router.navigate(["/login"])
  }
}
