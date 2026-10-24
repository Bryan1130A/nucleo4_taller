import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Fire } from '../../services/fire';
import { Api } from '../../services/api';
import { usarFirebase } from '../../services/config';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-tabla',
  styleUrl: './tabla.css',
  templateUrl: './tabla.html',
})
export class Tabla implements OnInit {

  servicio = usarFirebase ? inject(Fire) : inject(Api)

  libros = signal<any[]>([])
  genero = ""

  async ngOnInit() {
    this.libros.set(await this.servicio.getLibros())
  }
}
