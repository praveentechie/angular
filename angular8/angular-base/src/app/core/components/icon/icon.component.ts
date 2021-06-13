import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: '[agIcon]',
  templateUrl: './icon.component.html',
  styleUrls: [
    './icon.component.scss'
  ]
})
class Icon implements OnInit {
  @Input() icon: string;
  @Input() height?: string;
  @Input() width?: string;
  style: object;
  wrapperStyle: object;

  constructor() {
    console.log('const ico');
  }

  ngOnInit(): void {
    console.log('init ico', this);
    this.style = {
      'background-image': 'url("/assets/icons/' + this.icon + '.svg")'
    };
    this.wrapperStyle = {};
    if (this.height) {
      this.wrapperStyle['height'] = this.height;
    }
    if (this.width) {
      this.wrapperStyle['width'] = this.width;
    }
  }
}

export default Icon;