import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { NoteDecorator } from './components/note.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    // ### angular - module: export number of modules and the target module that is importing it can use the exported modules.
    // no need to import individually in all the modules
    CommonModule,
    NoteDecorator
  ],
  declarations: [
    NoteDecorator
  ]
})
export class CoreModule {}