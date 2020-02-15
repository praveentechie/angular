import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { HomeRouterModule } from './home-router.module';
import { SubHomeComponent } from './sub-home.component';
import { UpperCasePipe } from './pipes/home.pipe';
import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [
    CoreModule,
    HomeRouterModule
  ],
  declarations: [
    HomeComponent,
    SubHomeComponent,
    UpperCasePipe
  ]
})
export class HomeModule {}