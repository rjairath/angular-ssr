import {
  BrowserModule,
  BrowserTransferStateModule,
} from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SsrHomeComponent } from "./ssr-home/ssr-home.component";

@NgModule({
  declarations: [AppComponent, SsrHomeComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: "serverApp" }),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserTransferStateModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
