import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Sesion } from '../services/sesion';
import { Fire } from '../services/fire';
import { Api } from '../services/api';
import { usarFirebase } from '../services/config';

export const adminGuard: CanActivateFn = async (route, state) => {

  const sesion = inject(Sesion)
  const router = inject(Router)
  const servicio = usarFirebase ? inject(Fire) : inject(Api)

  const usuarios = await servicio.getUsuarios()
  const usuario = usuarios.find((u: any) => u.email == sesion.usuario()?.email)

  if (usuario && usuario.rol == "admin") {
    return true
  } else {
    return router.createUrlTree(["/tabla"])
  }
};
