import { NgModule } from "@angular/core";
import { AboutComponent } from "./about.component";
import { CommonModule } from '@angular/common';
import { AboutRouterModule } from './about-router.module';

@NgModule({
  imports: [
    CommonModule,
    AboutRouterModule
  ],
  declarations: [
    AboutComponent
  ]
})
export class AboutModule { }