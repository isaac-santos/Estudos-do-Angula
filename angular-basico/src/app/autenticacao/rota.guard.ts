import { inject } from '@angular/core';
import { CanActivateFn, Router, UrlTree } from '@angular/router';

export const rotaGuard: CanActivateFn = (route, state) => {
  
  // Constante
  const rota = inject(Router);

  // Redirecionamento
  //rota.navigateByUrl('/pagina1');
  if(localStorage.getItem('nome') === 'Isaac'){
    return true;
  }else{
    return rota.parseUrl('/pagina1');
  }
  
};
