import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './core/components/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    // ### angular router: lazily loading a module, the modules routes has to be declared in the module else will get 404
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'help',
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
  }, {
    // ### angular router: fallback 404 config
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })], // ### angular router: forRoot() should have only once declare child routes with forChild()
  exports: [RouterModule]
})
export class AppRoutingModule { }
