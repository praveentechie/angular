import { Component } from "@angular/core";
import { StringHelperService } from '@apcore/helpers/string-helper.service';

@Component({
  templateUrl: './ag-component.component.html'
})
export class AgComponent {
  // definition
  componentDefinition: String;
  // instance method
  stringHelper: StringHelperService;
  stringValue: String;
  // ngFor start
  heroList: Array<String>;
  
  constructor(stringHelper: StringHelperService) {
    this.stringHelper = stringHelper;
    this.stringValue = '';
    this.heroList = ['Wolverine', 'Batman'];
    this.componentDefinition = `
    The @Component decorator identifies the class immediately below it as a component class, and specifies its metadata.
    {{hero.name}}, (click), and [hero] bind program data to and from the DOM.
    `;
  }

  convertToUpperCase(text: String): String {
    console.log('class method used in template is called');
    return this.stringHelper.toUpperCase(text);
  }

  // instance method start
  handleClick() {
    console.log('clicked event fired');
  }

  toggleStringValue() {
    this.stringValue = this.stringValue ? '' : 'ap';
  }
  // instance method end
}
