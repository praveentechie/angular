export class DemoItem {
  path: string;
  component: any;
  displayName: string;
  description: string;

  constructor(path: string, component: any, displayName: string, description: string) {
    this.path = path;
    this.component = component;
    this.displayName = displayName;
    this.description = description;
  }
}
