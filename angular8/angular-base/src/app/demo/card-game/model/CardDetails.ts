export class CardDetails {
  id: number;
  value: number;
  matched: boolean;
  visible: boolean;

  constructor(id: number, value: number) {
    this.id = id;
    this.value = value;
    this.matched = false;
    this.visible = false;
  }
}
