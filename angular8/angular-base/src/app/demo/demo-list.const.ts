import { CardGame } from "./card-game/card-game.component";
import { DemoItem } from "./card-game/model/DemoItem";
import TicTacToe from "./tic-tac-toe/tic-tac-toe.component";
import ToastDemo from "./toast/toast-demo.component";

export const demoItemList = [
  new DemoItem('memory-card', CardGame, 'Memory match card game', 'Try to match the pair of cards that has same value.The cards are inverted and the value will be visible after you select the card.'),
  new DemoItem('toast', ToastDemo, 'Toast notification demo', 'A toast notification component implemented with `@angular/animations` for transition effects.'),
  new DemoItem('tic-tac-toe', TicTacToe, 'Tic Tac Toe Game', 'The player who succeeds in placing three of their marks in a diagonal, horizontal, or vertical row is the winner.')
];
