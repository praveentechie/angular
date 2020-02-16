import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { HomeRouterModule } from './home-router.module';
import { SubHomeComponent } from './sub-home.component';
import * as HomePipes from './pipes/home.pipe';
import { CoreModule } from '@apcore/core.module';
// ### angular tsconfig: add shortcut for folder name

@NgModule({
  imports: [
    CoreModule,
    HomeRouterModule
  ],
  declarations: [
    HomeComponent,
    SubHomeComponent,
    // ### angular declare multiple components
    ...Object.values(HomePipes)
  ]
})
export class HomeModule {}