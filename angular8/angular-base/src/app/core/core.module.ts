import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NoteDecorator } from './components/note.component';
import ToastNotification from "./components/toast/toast.component";
import Icon from "./components/icon/icon.component";

@NgModule({
  imports: [
    // pre-defined modules
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    // ### angular - module: export number of modules and the target module that is importing it can use the exported modules.
    // no need to import individually in all the modules
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Icon,
    NoteDecorator,
    ToastNotification
  ],
  declarations: [
    Icon,
    NoteDecorator,
    ToastNotification
  ]
})
export class CoreModule {}