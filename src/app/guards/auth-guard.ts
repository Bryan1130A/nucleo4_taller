import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Sesion } from '../services/sesion';

export const authGuard: CanActivateFn = (route, state) => {

  const sesion = inject(Sesion)
  const router = inject(Router)

  if (sesion.estaLogueado()) {
    return true
  } else {
    return router.createUrlTree(["/login"])
  }
};
