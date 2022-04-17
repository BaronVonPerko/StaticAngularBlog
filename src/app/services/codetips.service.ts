import { Injectable } from '@angular/core';
import {from, Observable, of} from 'rxjs';
import CodeTip from '../models/codetip';
import { default as CodeTips } from '../../_assets/codetips/codetips.json';
import {filter, mergeMap, take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CodetipsService {

  constructor() {
  }

  getCodeTips(): Observable<CodeTip[]> {
    return of(CodeTips.CodeTips);
  }

  getCodeTipDetails(link: string): Observable<CodeTip> {
    return this.getCodeTips().pipe(
      mergeMap(tip => tip),
      filter(tip => tip.link === link),
      take(1)
    );
  }
}
