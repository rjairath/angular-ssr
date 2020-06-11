import { Component, OnInit, Inject, PLATFORM_ID } from "@angular/core";
import { TransferState, makeStateKey } from "@angular/platform-browser";
import { isPlatformServer } from "@angular/common";
import { SsrService } from "../services/ssr.service";

const RESULT_KEY = makeStateKey<string>("result");
@Component({
  selector: "app-ssr-home",
  templateUrl: "./ssr-home.component.html",
  styleUrls: ["./ssr-home.component.scss"],
})
export class SsrHomeComponent implements OnInit {
  searchQuery: string = "";
  gifList: any[];
  //this.scriptRequired
  scriptLoaded: boolean = false;
  isServer: boolean;

  constructor(
    private ssrService: SsrService,
    private state: TransferState,
    @Inject(PLATFORM_ID) platformId
  ) {
    this.isServer = isPlatformServer(platformId);
  }

  ngOnInit() {
    this.searchQuery = "cool";
    // On the server or Client side render
    if (this.isServer || (!this.isServer && !this.state.hasKey(RESULT_KEY))) {
      this.getGif();
    }
    // On the server
    else if (this.state.hasKey(RESULT_KEY)) {
      console.log("in browser");
      this.gifList = JSON.parse(this.state.get(RESULT_KEY, ""));
    }
  }

  getGif() {
    this.gifList = [];
    this.ssrService.getGif(this.searchQuery).subscribe((data: any[]) => {
      this.gifList = data.map((item) => {
        return item.images.fixed_height_downsampled;
      });
      if (this.isServer) {
        this.state.set(RESULT_KEY, JSON.stringify(this.gifList));
      }
    });
  }
}
