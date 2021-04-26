import { NgModule } from "@angular/core";
import { CoreModule } from "@apcore/core.module";
import { CardElement } from "./card-game/card-element.component";
import { CardGame } from "./card-game/card-game.component";
import { DemoList } from "./demo-list.component";
import DemoListConst from './demo-list.const';
import { DemoRouterModule } from "./demo-routing.module";

@NgModule({
  providers: [
    DemoListConst.getItems()
  ],
  imports: [
    CoreModule,
    DemoRouterModule
  ],
  declarations: [
    DemoList,
    CardGame,
    CardElement
  ]
})
export class DemoModule {}