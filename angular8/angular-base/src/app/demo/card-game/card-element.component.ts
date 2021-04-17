import { Component, Input } from "@angular/core";
import { CardDetails } from "./model/CardDetails";

@Component({
  selector: '[cardElement]',
  templateUrl: './card-element.component.html',
  styleUrls: [
    './card-element.component.scss'
  ]
})
export class CardElement {
  // ### angular @Input: allows parent -> children data flow
  // ### angular @Input data
  @Input() card: CardDetails;
  // ### angular @Input function
  @Input() toggleVisible: (cardId: number, visible: boolean) => void;
}