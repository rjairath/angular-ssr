import { Component, OnInit } from "@angular/core";
import { SsrService } from "../services/ssr.service";
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

  constructor(private ssrService: SsrService) {}

  ngOnInit() {
    this.searchQuery = "cool";
    this.getGif();
  }

  getGif() {
    this.gifList = [];
    this.ssrService.getGif(this.searchQuery).subscribe((data: any[]) => {
      this.gifList = data.map((item) => {
        return item.images.fixed_height_downsampled;
      });
    });
  }
}
