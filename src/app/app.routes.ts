import { Routes } from '@angular/router';
import { Formulario } from './pages/formulario/formulario';
import { Tabla } from './pages/tabla/tabla';
import { Privado } from './pages/privado/privado';
import { pokePsiquicoGuard } from './guards/poke-psiquico-guard';
import { Login } from './pages/login/login';
import { Registro } from './pages/registro/registro';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
    {path: "formulario", component:Formulario, canActivate: [authGuard]},
    {path: "tabla", component:Tabla},
    {path: "privado", component:Privado, canActivate:[pokePsiquicoGuard]},
    {path: "login", component:Login},
    {path: "registro", component:Registro},

    {path: "", redirectTo:"login", pathMatch:'full'}
];
