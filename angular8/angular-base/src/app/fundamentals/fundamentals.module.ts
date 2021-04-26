import { NgModule } from '@angular/core';
// ### angular tsconfig: add shortcut for folder
import { CoreModule } from '@apcore/core.module';
import { TrimValuePipe, UpperCasePipe } from './pipes/fundamentals.pipe';
import { FundamentalsRouterModule } from './fundamentals-routing.module';
import { FundamentalsPage } from './fundamentals.component';
import { AgComponent } from './components/ag-component.component';
import { ModulesComponent } from './components/modules.component';

@NgModule({
  imports: [
    CoreModule,
    FundamentalsRouterModule
  ],
  declarations: [
    FundamentalsPage,
    AgComponent,
    ModulesComponent,
    // ### angular declare multiple components
    // TODO: not working in prod build ...Object.values(AgPipes)
    TrimValuePipe,
    UpperCasePipe
  ]
})
export class FundamentalsModule{}