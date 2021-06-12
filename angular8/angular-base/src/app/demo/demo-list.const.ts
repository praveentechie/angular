import { CardGame } from "./card-game/card-game.component";
import { DemoItem } from "./card-game/model/DemoItem";
import ToastDemo from "./toast/toast-demo.component";

export const demoItemList = [
  new DemoItem('memory-card', CardGame, 'Memory match card game', 'Try to match the pair of cards that has same value.The cards are inverted and the value will be visible after you select the card.'),
  new DemoItem('toast', ToastDemo, 'Toast notification demo', 'A toast notification component implemented with `@angular/animations` for transition effects.')
];
