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
      property: "og:image",
      content: `${environment.baseurl}/assets/images/${image}`,
    });

    this.meta.updateTag({
      property: "og:title",
      content: title,
    });

    this.meta.updateTag({
      property: "og:type",
      content: type,
    });

    this.meta.updateTag({
      property: "og:url",
      content: `${environment.baseurl}/${url}`,
    });
  }

  public setTwitterCardData(title: string, image: string) {
    this.meta.updateTag({
      property: "twitter:card",
      content: "summary_large_image",
    });

    this.meta.updateTag({
      property: "twitter:title",
      content: title,
    });

    this.meta.updateTag({
      property: "twitter:creator",
      content: "@chrisjperko",
    });

    this.meta.updateTag({
      property: "twitter:image",
      content: `${environment.baseurl}/assets/images/${image}`,
    });
  }
}
