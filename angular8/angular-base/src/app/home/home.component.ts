import { Component } from "@angular/core";

@Component({
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.scss'
  ]
})
export class HomeComponent {
  constructor () {
    window.onscroll = () => {
      console.log('this', this);
      this.myFunction();
    };
  }

  myFunction() {
  // Get the header
  var header = document.getElementById("pageHeader");

  // Get the offset position of the navbar
  var sticky = header.offsetTop;

  // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }
}
