import { CanActivateFn } from '@angular/router';

export const canMatchGuard: CanActivateFn = (route, state) => {
  return true;
};
