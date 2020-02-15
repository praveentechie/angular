import { Component } from '@angular/core';

@Component({
  // ### angular - component
  //selector: 'router-outlet', //A CSS selector that tells Angular to create and insert an instance of this component wherever it finds the corresponding tag in template HTML.
  templateUrl: './about.component.html',
  styleUrls: []
})
export class AboutComponent {
  title = 'angular-base';
  isUnchanged = false;
}
