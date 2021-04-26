import { Component, OnInit } from "@angular/core";
import { demoItemList } from './demo-list.const';
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
    this.demoItems = demoItemList;
  }

  public getDemoItems() : Array<DemoItem> {
    return this.demoItems;
  }
  
}
