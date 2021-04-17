import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { HomeRouterModule } from './home-routing.module';
import { CoreModule } from '@apcore/core.module';

@NgModule({
  imports: [
    CoreModule,
    HomeRouterModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule {}