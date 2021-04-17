import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DemoList } from "./demo-list.component";
import { demoItems } from "./demo-list.const";

const DEMO_ROUTES: Routes = [
  {
    path: '',
    component: DemoList
  },
  ...demoItems.map(item => ({path: item.path, component: item.component}))
];

@NgModule({
  imports: [
    RouterModule.forChild(DEMO_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class DemoRouterModule {}