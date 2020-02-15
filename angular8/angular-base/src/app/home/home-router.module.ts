import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { SubHomeComponent } from './sub-home.component';

let homeRoutes: Routes = [
  {
    path: '',
    // ### angular router: path through which the module was lazily loaded e.g /home the sub path should include it automatically
    component: HomeComponent
  }, {
    path: 'sub',
    // actual path for sub is `/home/sub`
    component: SubHomeComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes)
    // ### angular router: forChild() adds new child routes and parent has to be declared with forRoot()
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRouterModule {}