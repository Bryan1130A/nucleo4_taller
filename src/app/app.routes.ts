import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Registro } from './pages/registro/registro';
import { Tabla } from './pages/tabla/tabla';
import { Formulario } from './pages/formulario/formulario';
import { authGuard } from './guards/auth-guard';
import { adminGuard } from './guards/admin-guard';

export const routes: Routes = [
    {path: "login", component: Login},
    {path: "registro", component: Registro},
    {path: "tabla", component: Tabla, canActivate: [authGuard]},
    {path: "formulario", component: Formulario, canActivate: [authGuard, adminGuard]},

    {path: "", redirectTo: "login", pathMatch: 'full'},
    {path: "**", redirectTo: "login"}
];
