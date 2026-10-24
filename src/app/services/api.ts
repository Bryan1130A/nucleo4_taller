import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Service()
export class Api {

    private API_LIBROS = "http://localhost:3000/libros"
    private API_USUARIOS = "http://localhost:3000/usuarios"
    http = inject(HttpClient)

    getLibros(): Promise<any> {
        return firstValueFrom(this.http.get(this.API_LIBROS))
    }

    postLibro(libro: any) {
        return firstValueFrom(this.http.post(this.API_LIBROS, libro))
    }

    putLibro(id: string, libro: any) {
        return firstValueFrom(this.http.put(this.API_LIBROS + "/" + id, libro))
    }

    deleteLibro(id: string) {
        return firstValueFrom(this.http.delete(this.API_LIBROS + "/" + id))
    }

    getUsuarios(): Promise<any> {
        return firstValueFrom(this.http.get(this.API_USUARIOS))
    }

    postUsuario(usuario: any) {
        return firstValueFrom(this.http.post(this.API_USUARIOS, usuario))
    }
}
