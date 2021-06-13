import { NgModule } from "@angular/core";
import { CoreModule } from "@apcore/core.module";
import { CardElement } from "./card-game/card-element.component";
import { CardGame } from "./card-game/card-game.component";
import { DemoList } from "./demo-list.component";
import { DemoRouterModule } from "./demo-routing.module";
import TicTacToe from "./tic-tac-toe/tic-tac-toe.component";
import ToastDemo from "./toast/toast-demo.component";

@NgModule({
  imports: [
    CoreModule,
    DemoRouterModule
  ],
  declarations: [
    CardElement,
    CardGame,
    DemoList,
    TicTacToe,
    ToastDemo
  ]
})
export class DemoModule {}