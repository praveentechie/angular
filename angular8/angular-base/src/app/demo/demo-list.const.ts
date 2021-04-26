import { Injectable } from "@angular/core";
import { CardGame } from "./card-game/card-game.component";
import { DemoItem } from "./card-game/model/DemoItem";

@Injectable({
  providedIn: 'root'
})
export default class DemoItemConst {
  public static getItems() {
    return [
      new DemoItem('memory-card', CardGame, 'Memory-Card game', '')
    ];
  }
};
