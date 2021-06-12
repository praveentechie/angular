import { Component } from "@angular/core";

@Component({
  selector: '[ui-layout]',
  templateUrl: './ui-layout.component.html',
  styleUrls: ['./ui-layout.component.scss']
})
export class UILayout {
  constructor() {
    window.onscroll = () => {
      this.setStickyHeader();
    };
  }

  setStickyHeader() {
    // Get the header
    var header = document.getElementById("navHeader");
  
    // Get the offset position of the navbar
    var sticky = header.offsetTop;
  
    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }

  toggleMenu(targetId) {
    document.getElementById(targetId).classList.toggle('show');
  }
}