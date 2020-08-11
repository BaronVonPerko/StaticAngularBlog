import {Injectable} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Injectable({
  providedIn: 'root'
})
export class PageHeadService {

  constructor(private title: Title) {
  }

  public setTitle(title: string) {
    if (!title) this.title.setTitle("ChrisPerko.NET");
    else this.title.setTitle(`${title} | ChrisPerko.NET`);
  }
}
