import { Injectable } from '@angular/core';
import { Pages } from '../../_assets/pages/pages.json';
import Page from '../models/page.js';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor() { }

  getMenuPages(): Page[] {
    return Pages.filter(page => page.inMenu);
  }

  getPageDetails(link: string): Page {
    return Pages.filter(page => page.link === link)[0];
  }

}
