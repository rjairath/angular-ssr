import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SsrHomeComponent } from "./ssr-home/ssr-home.component";
const routes: Routes = [
  {
    path: "",
    component: SsrHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
