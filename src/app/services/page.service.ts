import { Injectable } from '@angular/core';
import { default as Pages } from '../../_assets/pages/pages.json';
import Page from '../models/page.js';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor() { }

  getMenuPages(): Observable<Page[]> {
    return new Observable(subscriber => {
      subscriber.next(Pages.Pages.filter(page => page.inMenu));
    });
  }

  getPageDetails(link: string): Observable<Page> {
    return new Observable(subscriber => {
      subscriber.next(Pages.Pages.filter(page => page.link === link)[0]);
    });
  }

}
