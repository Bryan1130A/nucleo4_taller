import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Fire } from '../../services/fire';
import { Api } from '../../services/api';
import { usarFirebase } from '../../services/config';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-formulario',
  styleUrl: './formulario.css',
  templateUrl: './formulario.html',
})
export class Formulario implements OnInit {

  servicio = usarFirebase ? inject(Fire) : inject(Api)

  libros = signal<any[]>([])
  mensaje = signal("")

  id = ""
  titulo = ""
  autor = ""
  genero = "novela"
  precio = 0

  async ngOnInit() {
    await this.cargar()
  }

  async cargar() {
    this.libros.set(await this.servicio.getLibros())
  }

  async guardar() {
    if (this.titulo == "" || this.autor == "" || this.precio <= 0) {
      this.mensaje.set("completa los datos del libro")
      return
    }

    const libro = {
      titulo: this.titulo,
      autor: this.autor,
      genero: this.genero,
      precio: Number(this.precio)
    }

    if (this.id == "") {
      await this.servicio.postLibro(libro)
      this.mensaje.set("libro guardado")
    } else {
      await this.servicio.putLibro(this.id, libro)
      this.mensaje.set("libro editado")
    }

    this.limpiar()
    await this.cargar()
  }

  editar(libro: any) {
    this.id = libro.id
    this.titulo = libro.titulo
    this.autor = libro.autor
    this.genero = libro.genero
    this.precio = libro.precio
    this.mensaje.set("editando: " + libro.titulo)
  }

  async eliminar(id: string) {
    if (confirm("seguro que quieres eliminar este libro?")) {
      await this.servicio.deleteLibro(id)
      this.mensaje.set("libro eliminado")
      await this.cargar()
    }
  }

  limpiar() {
    this.id = ""
    this.titulo = ""
    this.autor = ""
    this.genero = "novela"
    this.precio = 0
  }
}
