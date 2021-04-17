import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { FundamentalsPage } from './fundamentals.component';
import { AgComponent } from './components/ag-component.component';
import { ModulesComponent } from './components/modules.component';

const FUNDAMENTALS_ROUTES: Routes = [{
  path: '',
  // ### angular router: path through which the module was lazily loaded e.g /home the sub path should include it automatically
  component: FundamentalsPage
}, {
  path: 'components',
  // actual path for sub is `/fundamentals/components`
  component: AgComponent
}, {
  path: 'modules',
  // actual path for sub is `/fundamentals/components`
  component: ModulesComponent
}];

@NgModule({
  imports: [
    // ### angular router: forChild() adds new child routes and parent has to be declared with forRoot()
    RouterModule.forChild(FUNDAMENTALS_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class FundamentalsRouterModule {}