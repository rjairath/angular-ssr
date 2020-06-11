import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, pluck } from "rxjs/operators";
@Injectable({
  providedIn: "root",
})
export class SsrService {
  constructor(private http: HttpClient) {}

  url = "https://api.giphy.com/v1/gifs/search";
  token = process.env.GIPHY_KEY;

  getGif(searchQuery: string) {
    let url1 = `${this.url}?api_key=${this.token}&q=${searchQuery}&limit=10`;
    return this.http.get(url1).pipe(pluck("data"));
  }
}
