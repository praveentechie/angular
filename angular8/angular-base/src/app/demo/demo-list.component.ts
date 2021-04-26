import { Component, OnInit } from "@angular/core";
import DemoListConst from './demo-list.const';
import { DemoItem } from "./card-game/model/DemoItem";

@Component({
  templateUrl: './demo-list.component.html',
  styleUrls: [
    './demo-list.component.scss'
  ]
})
export class DemoList implements OnInit {
  demoItems: Array<DemoItem>;

  ngOnInit(): void {
    this.demoItems = DemoListConst.getItems();
  }

  public getDemoItems() : Array<DemoItem> {
    return this.demoItems;
  }
  
}
