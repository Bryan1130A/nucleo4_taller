import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';

@Service()
export class Usuario {

    private API_USER = "http://localhost:3000/usuarios"
    http = inject(HttpClient)

    //LEER
    getUsuario():Observable<any>{
        return this.http.get(this.API_USER)
    }

    //GUARDAR
    postUsuario(nuevoUsuario: any):Observable<any>{
        return this.http.post(this.API_USER, nuevoUsuario)
    }
}
