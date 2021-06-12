import { Component, OnInit } from "@angular/core";
import { Router, NavigationExtras, ActivatedRoute } from "@angular/router";
import { demoItemList } from './demo-list.const';
import { DemoItem } from "./card-game/model/DemoItem";

@Component({
  templateUrl: './demo-list.component.html',
  styleUrls: [
    './demo-list.component.scss'
  ]
})
export class DemoList implements OnInit {
  private router: Router;
  private route: ActivatedRoute;

  demoItems: Array<DemoItem>;

  // TODO: constructor vs ngOnInit
  constructor(router: Router, route: ActivatedRoute) {
    this.router = router;
    this.route = route;
  }

  ngOnInit(): void {
    this.demoItems = demoItemList;
  }

  public getDemoItems() : Array<DemoItem> {
    return this.demoItems;
  }

  goToPage(route: string) {
    console.log(this, route);
    this.router.navigate([`${route}`], {relativeTo: this.route});
  }
  
}
