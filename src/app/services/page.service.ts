import { Injectable } from '@angular/core';
import { default as Pages } from '../../_assets/pages/pages.json';
import Page from '../models/page.js';
import { Observable, of } from 'rxjs';
import { filter, mergeMap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor() {
  }

  getMenuPages(): Observable<Page[]> {
    return of(Pages.Pages);
  }

  getPageDetails(link: string): Observable<Page> {
    return this.getMenuPages().pipe(
      mergeMap(page => page),
      filter(page => page.link === link),
      take(1)
    );
  }

}
