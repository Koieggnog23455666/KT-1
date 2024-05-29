import { CanActivateFn } from '@angular/router';

export const canDeactivateGuard: CanActivateFn = (route, state) => {
  if(window.confirm("Are you sure to leave page?")){
    return true;

  }
  return false;
};
