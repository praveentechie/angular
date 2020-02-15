import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { HomeRouterModule } from './home-router.module';
import { SubHomeComponent } from './sub-home.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    HomeRouterModule
  ],
  declarations: [
    HomeComponent,
    SubHomeComponent
  ]
})
export class HomeModule {}