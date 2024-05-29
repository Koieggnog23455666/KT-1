import { NgModule } from '@angular/core';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NewComponentComponent } from './new-component/new-component.component';
import { map } from 'rxjs';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AdminModule } from './admin/admin.module';

import { canDeactivateGuard } from './can-deactivate.guard';
import { AppComponent } from './app.component';

import { canActivateGuard } from './can-activate.guard';
import { AuthenticateComponent } from './authenticate/authenticate.component';

const routes: Routes = [
  {path:'admin',loadChildren:()=>import('./admin/admin.module').then((mod)=>mod.AdminModule)},
{path:'',component:NewComponentComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent,canDeactivate:[canDeactivateGuard],canActivate:[canActivateGuard]},
  {path:'login',component:AuthenticateComponent},
  {path:'**',component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
