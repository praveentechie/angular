import { Component } from "@angular/core";

@Component({
  templateUrl: './fundamentals.component.html',
  styleUrls: [
    './fundamentals.component.scss'
  ]
})
export class FundamentalsPage {
  conceptList: Array<FundamentalItem> = [
    new FundamentalItem('Modules', 'modules'),
    new FundamentalItem('Components', 'components')
  ]
}

class FundamentalItem {
  displayName: String;
  urlPath: String;

  constructor(displayName: String, urlPath) {
    this.displayName = displayName;
    this.urlPath = urlPath;
  }
}
