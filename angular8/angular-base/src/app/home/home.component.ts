import { Component } from "@angular/core";
import { StringHelperService } from '../core/helpers/string-helper.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.scss'
  ]
})
export class HomeComponent {
  stringHelper: StringHelperService;
  stringValue: String;
  
  constructor(stringHelper: StringHelperService) {
    this.stringHelper = stringHelper;
    this.stringValue = '';
  }

  convertToUpperCase(text: String): String {
    console.log('class method used in template is called');
    return this.stringHelper.toUpperCase(text);
  }

  handleClick() {
    console.log('clicked event fired');
  }

  toggleStringValue() {
    this.stringValue = this.stringValue ? '' : 'ap';
  }
}
