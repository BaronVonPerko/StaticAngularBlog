import {Injectable} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PageHeadService {

  constructor(private title: Title, private meta: Meta) {
  }

  public setTitle(title: string) {
    if (!title) this.title.setTitle("ChrisPerko.NET");
    else this.title.setTitle(`${title} | ChrisPerko.NET`);
  }

  public setOpenGraphTags(title: string, image: string, url: string, type = "article") {
    this.meta.updateTag({
      name: "og:image",
      content: `${environment.baseurl}/assets/images/${image}`,
    });

    this.meta.updateTag({
      name: "og:title",
      content: title,
    });

    this.meta.updateTag({
      name: "og:type",
      content: type,
    });

    this.meta.updateTag({
      name: "og:url",
      content: `${environment.baseurl}/${url}`,
    });
  }

  public setTwitterCardData(title: string, image: string) {
    this.meta.updateTag({
      name: "twitter:card",
      content: title,
    });

    this.meta.updateTag({
      name: "twitter:title",
      content: title,
    });

    this.meta.updateTag({
      name: "twitter:creator",
      content: "@chrisjperko",
    });

    this.meta.updateTag({
      name: "twitter:image",
      content: `${environment.baseurl}/assets/images/${image}`,
    });
  }
}
