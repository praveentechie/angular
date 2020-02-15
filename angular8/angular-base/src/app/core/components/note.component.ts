import { Component, Input } from "@angular/core";

@Component({
  selector: 'note-decorator',
  templateUrl: './note.component.html'
})
export class NoteDecorator {
  @Input() displayText: String;
  @Input('displayInline') isDisplayInline: Boolean;
}