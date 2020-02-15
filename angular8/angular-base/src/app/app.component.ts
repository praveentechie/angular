import { Component } from '@angular/core';

@Component({
  // ### angular - component
  selector: 'app-root', //A CSS selector that tells Angular to create and insert an instance of this component wherever it finds the corresponding tag in template HTML.
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-base';
  isUnchanged = false;
}
