import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './core/components/not-found.component';
import { AuthGuardService } from '@apcore/helpers/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  }, {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  }, {
    path: 'home',
    // ### angular router: lazily loading a module, the modules routes has to be declared in the module else will get 404
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    // ### angular router: guard for checking async module permission
    canLoad: [AuthGuardService]
  }, {
    path: 'fundamentals',
    // ### angular router: lazily loading a module, the modules routes has to be declared in the module else will get 404
    loadChildren: () => import('./fundamentals/fundamentals.module').then(m => m.FundamentalsModule),
    canLoad: [AuthGuardService]
  }, {
    path: 'demo',
    loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule)
  }, {
    path: 'help',
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
  }, {
    // ### angular router: fallback 404 config
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  // ### angular router: forRoot() should have only once declare child routes with forChild()
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
