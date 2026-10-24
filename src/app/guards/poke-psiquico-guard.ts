import { CanActivateFn } from '@angular/router';

export const pokePsiquicoGuard: CanActivateFn = (route, state) => {

  let acceso = localStorage.getItem("token")

  if( acceso== "true"){
     return true;
  }else{
    return false
  }

 
};
