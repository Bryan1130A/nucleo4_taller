import { Service, signal } from '@angular/core';

@Service()
export class Sesion {

    usuario = signal<any>(JSON.parse(localStorage.getItem("usuario") || "null"))

    iniciar(usuario: any) {
        const datos = { nombre: usuario.nombre, email: usuario.email, rol: usuario.rol }
        localStorage.setItem("usuario", JSON.stringify(datos))
        this.usuario.set(datos)
    }

    estaLogueado() {
        return this.usuario() != null
    }

    esAdmin() {
        return this.usuario()?.rol == "admin"
    }

    cerrar() {
        localStorage.removeItem("usuario")
        this.usuario.set(null)
    }
}
