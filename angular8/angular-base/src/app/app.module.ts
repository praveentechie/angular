import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AboutModule } from './about/about.module';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './core/components/not-found.component';
import { UILayout } from './core/components/ui-layout.component';
import { HomeModule } from './home/home.module';

@NgModule({
  // ### angular - module
  declarations: [ //The components, directives, and pipes that belong to this NgModule.
    AppComponent,
    NotFoundComponent,
    UILayout
  ],
  exports: [
    AppRoutingModule
  ], //The subset of declarations that should be visible and usable in the component templates of other NgModules.
  imports: [ //Other modules whose exported classes are needed by component templates declared in this NgModule.
    BrowserModule,
    AboutModule,
    HomeModule,
    AppRoutingModule // ### angular router - add routing module to the last if not the child rules will not be included and it falls back to 404 url
  ],
  providers: [], //Creators of services that this NgModule contributes to the global collection of services; they become accessible in all parts of the app
  bootstrap: [AppComponent] //The main application view, called the root component, which hosts all other app views. Only the root NgModule should set the bootstrap property.
})
export class AppModule { }
