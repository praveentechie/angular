import { Component, Input } from "@angular/core";

@Component({
  selector: 'note-decorator',
  templateUrl: './note.component.html',
  styleUrls: [
    './note.component.scss'
  ]
})
export class NoteDecorator {
  @Input() displayText: String;
  @Input('displayInline') isDisplayInline: Boolean;
}