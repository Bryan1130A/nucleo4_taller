import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Sesion } from '../../services/sesion';

@Component({
  imports: [RouterLink],
  selector: 'app-nav-bar',
  styleUrl: './nav-bar.css',
  templateUrl: './nav-bar.html',
})
export class NavBar {

  sesion = inject(Sesion)
  router = inject(Router)

  salir() {
    this.sesion.cerrar()
    this.router.navigate(["/login"])
  }
}
