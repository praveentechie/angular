import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DemoList } from "./demo-list.component";
import { demoItemList } from "./demo-list.const";

const DEMO_ROUTES: Routes = [
  {
    path: '',
    component: DemoList
  },
  ...demoItemList.map(item => ({path: item.path, component: item.component}))
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