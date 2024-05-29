import { CanActivateFn } from '@angular/router';

export const canChidActivateGuard: CanActivateFn = (route, state) => {
  const check=localStorage.getItem('user')
  if(check=='false'){
    alert("you are not authenticate user")
    return false;
  }
  return true
  
};
